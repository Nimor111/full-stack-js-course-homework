const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required!"],
      trim: true
    },
    content: {
      type: String,
      trim: true
    },
    tags: {
      type: [String]
    },
    imageUrl: {
      type: String
    },
    status: {
      type: String,
      trim: true,
      enum: {
        values: ["Active", "Inactive"]
      },
      default: "Active"
    },
    author: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
