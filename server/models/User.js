const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailVerified: Boolean,
  emailVerificationToken: String,
  pass: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  resetToken: String, // token to change your password
  token: {
    // access token - generated when user is logging in
    type: String,
  },
});

// Mongoose middleware 'pre':
// before save
// needs a callback function
userSchema.pre("save", function (next) {
  console.log("PRE here!");

  const user = this;
  // console.log('user is', user)

  if (user.isModified("pass")) {
    // check if password is about to be changed

    console.log("pass will be modified");

    bcrypt.genSalt(saltRounds, function (err, salt) {
      // console.log('INSIDE Gensalt, salt is', salt)
      // $2b$10$yAUMtaN7uIFWGTVc2mmzne
      if (err) return next(err);

      bcrypt.hash(user.pass, salt, function (err, hash) {
        // console.log('INSIDE Genhash, hash is', hash)
        // $2b$10$yAUMtaN7uIFWGTVc2mmzne -> salt
        // $2b$10$yhEXcHdY6meFoFyoeZnIAuhO8OFkiLnwwzj6KiXIQEse0s3zW8mwS -> hash

        if (err) return next(err);

        user.pass = hash;

        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async (providedPass, dbPass) => {
  console.log("compare pass method: passwords are", providedPass, dbPass);

  return await bcrypt.compare(providedPass, dbPass);
};

userSchema.methods.generateToken = async function (expiration, dbField) {
  const user = this;

  // console.log('inside generate token: user is', user)

  // console.log('user._id converted', user._id.toHexString());

  const token = jwt.sign({ id: user._id.toHexString() }, process.env.SECRET, {
    expiresIn: expiration,
  });
  // console.log('token is', token)

  if (dbField) {
    // user.token
    // user.resetToken
    // user.refreshToken
    // user.emailVerifyToken

    user[dbField] = token;
    await user.save();
    return user;
  } else {
    // just return the token

    return token;
  }
};

userSchema.statics.getPayload = async (token) => {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return error.message;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
