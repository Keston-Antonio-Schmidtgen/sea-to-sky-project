const express = require("express");
const User = require("../models/User");
const router = express.Router();

const multer = require("multer");

// MULTER Local computer simple configuration
const uploadSimple = multer({ dest: "./server/uploads" });
// console.log('uploadSimple is', uploadSimple)
//******************************* */

// MULTER Local computer advanced configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },

  filename: function (req, file, cb) {
    console.log("inside storage: FILE is", file);

    let extension = "";

    if (file.mimetype.includes("image")) {
      extension = file.mimetype.slice(6);

      if (extension === "jpeg") extension = "jpg";

      const filename = `${req.body._id}-${Date.now()}-${
        file.originalname
      }.${extension}`;
      console.log("filename is", filename);
      cb(null, filename);
    } else {
      cb("Not an image file");
    }
  },
  // fileFilter: (req, file, cb) => {

  //     const ext = path.extname(file.originalname) //check extension
  //     if(ext !== '.jpg' && ext !== '.png'){
  //         return cb(res.status(400).end('only jpg, png is allowed'),false);
  //     }

  //     cb(null, true)
  // }
});

const uploadAdvanced = multer({ storage: storage });
//*************************************** */

// MULTER setup for cloudinary
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "e06production",
    format: async (req, file) => {
      let extension = "";

      if (file.mimetype.includes("image")) {
        extension = file.mimetype.slice(6);

        if (extension === "jpeg") extension = "jpg";
      }

      return extension;
    },
    public_id: (req, file) =>
      `${req.body._id}-${Date.now()}-${file.originalname}`,
  },
});

const uploadCloudinary = multer({ storage: storageCloudinary });
//*************************************** */

const sendEmail = require("../utils/mail/mail");
const sendEmailResetPass = require("../utils/mail/mailResetPass");
const { findByIdAndUpdate } = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    console.log("req.body is", req.body);

    const { email, username, pass } = req.body;

    if (!email || !username || !pass)
      return res.send({ success: false, errorId: 200 });

    const newUser = new User(req.body);

    const user = await newUser.save();

    const token = await user.generateToken("1d");
    // send an email to the user that just got registered
    sendEmail(user.email, token);

    console.log("Register: user created is", user);

    res.send({ success: true });
  } catch (error) {
    console.log("Register ERROR:", error.message);
    res.send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("req.body is", req.body);

    const { email, pass, username } = req.body;

    // need to check if pass is missing or one of username and email
    // if email and password are missing then email || username = false.
    // then the opposite of false is true. if it's true then send that success = false
    if (!(email || username) || !pass)
      return res.send({ success: false, errorId: 1 });

    // if (!email && !username) //send success false
    // if (!pass) send success false

    // const user = User.findOne({email: email, pass: pass})
    let user = await User.findOne({ $or: [{ email }, { username }] }).select(
      "-__v"
    );

    console.log("Login: user is", user);
    if (!user) return res.send({ success: false, errorId: 2 });

    const passMatch = await user.comparePassword(pass, user.pass);
    console.log(" passmatch is", passMatch);

    if (!passMatch) return res.send({ success: false, errorId: 3 }); // passwords don't match

    const token = await user.generateToken("1d");

    user = user.toObject();
    delete user.pass;
    delete user.token;

    res.cookie("cookiename", token).send({ success: true, user });
  } catch (error) {
    console.log("Login ERROR:", error.message);
    res.send(error.message);
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("cookiename").send({ success: true });
    console.log("logout: user logged out");
  } catch (error) {
    console.log("Logout ERROR:", error.message);
    res.send(error.message);
  }
});

router.patch("/profile", uploadAdvanced.single("image"), async (req, res) => {
  try {
    console.log("req.body is", req.body);
    console.log("req.file is", req.file);

    const { email, username, _id } = req.body;

    if (!(email || username)) return res.send({ success: false, errorId: 1 });

    // const foundUser = await User.findById({_id})
    //
    // update users (field1, field2) set field1 = email and field2 = username

    req.body.image = req.file.filename;

    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    }).select("-__v -pass");

    console.log("Profile: user is", user);

    if (!user) return res.send({ success: false, errorId: 2 });

    res.send({ success: true, user });
  } catch (error) {
    console.log("Register ERROR:", error.message);
    res.send(error.message);
  }
});

router.patch(
  "/profilecloudinary",
  uploadCloudinary.single("image"),
  async (req, res) => {
    try {
      console.log("req.body CLOUDINARY is", req.body);
      console.log("req.file CLOUDINARY is", req.file);

      const { email, username, _id } = req.body;

      if (!(email || username)) return res.send({ success: false, errorId: 1 });

      // const foundUser = await User.findById({_id})
      //
      // update users (field1, field2) set field1 = email and field2 = username

      req.body.image = req.file.path;

      const user = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
      }).select("-__v -pass");

      console.log("Profile: user CLOUDINARY is", user);

      if (!user) return res.send({ success: false, errorId: 2 });

      res.send({ success: true, user });
    } catch (error) {
      console.log("Register CLOUDINARY ERROR:", error.message);
      res.send(error.message);
    }
  }
);

router.get("/emailconfirm/:token", async (req, res) => {
  try {
    const token = req.params.token;
    console.log("token is ", token);

    // find the user with provided id (id is contained inside JWT)
    // update the user and set emailverified to true

    const payload = await User.getPayload(token);
    console.log("payload is ", payload);

    const id = payload.id;

    const updatedUser = User.findByIdAndUpdate(
      id,
      { emailVerified: true },
      { new: true }
    );

    if (!updatedUser) return res.send({ success: false });

    res.send({ success: true });
  } catch (error) {
    console.log("email confirm ERROR:", error.message);
    res.send(error.message);
  }
});

/**
 * NOTES ON FORGOT PASS AND CHANGE PASS
 *
 * 1. user has forgotten his pass and visits the /forgotpass page at the client
 * 2. user types his email and presses the submit button
 * 3. server is getting a post request which includes user's email
 * 4. server is checking if the email exists in DB
 * 5. if email exists server generates a token for reseting the pass
 * 6. server is sending an email to that email address containing a link for the user to change his password
 * 7. user receives an email with that link and clicks the link
 * 8. user is directed to the page /changepass
 * 9. user is typing his new pass and presses the submit button
 * 10. server is receiving his token and his new password
 * 11. server is verifying the token
 * 12. server is searching for the user with the user id that it's in the token
 * 13. server is updating the pass of the user
 */

// Client sends an email and we need to find this email in DB
// and generate and send an email with instruction to that email address
router.post("/forgotpass", async (req, res) => {
  try {
    const email = req.body.email;
    console.log("email is", email);
    // const token = req.params.token
    // console.log('token is ', token)

    // find user in db
    const user = await User.findOne({ email: email });
    console.log("user is", user);

    if (!user) return send({ success: false, errorId: 1 });

    const userWithToken = await user.generateToken("1d", "resetToken");

    console.log("token is ", userWithToken.resetToken);

    if (!userWithToken.resetToken) return send({ success: false, errorId: 2 });

    sendEmailResetPass(user.email, userWithToken.resetToken);

    res.send({ success: true });
  } catch (error) {
    console.log("forgot pass ERROR:", error.message);
    res.send(error.message);
  }
});

/**
 * this route accepts a token and a password
 * 1. find the user based on the token
 * 2. update his password
 */
router.post("/changepass", async (req, res) => {
  try {
    const { pass, token } = req.body;

    console.log("body is", req.body);

    // 1. verify the token
    const verifiedToken = await User.getPayload(token);

    console.log("verified token is", verifiedToken);

    const user = await User.findByIdAndUpdate(verifiedToken.id);

    if (user) {
      user.pass = pass;
      user.resetToken = "";

      const userSaved = await user.save();
      console.log("user is ", userSaved);
    }

    res.send({ success: true });
  } catch (error) {
    console.log("change pass ERROR:", error.message);
    res.send(error.message);
  }
});

module.exports = router;
