const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  subTitle: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
  },
  rates: {
    type: [],
  },
  comments: [
    {
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
      },
    },
  ],
  published: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
