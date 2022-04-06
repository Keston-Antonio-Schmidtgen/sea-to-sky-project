const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use("/users", require("./api/users"));
app.use("/posts", require("./api/posts"));
app.use("/pages", require("./api/pages"));
app.use("/media", require("./api/media"));
//app.use("/posts/comments", require("./api/comments"));

const connectToDb = require("./config/db");
connectToDb();

app.use(express.static("./server/uploads"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("server is up and running at port", port));
