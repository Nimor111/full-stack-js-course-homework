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
      trim: true,
      default: null
    },
    tags: {
      type: [String],
      default: []
    },
    imageUrl: {
      type: String,
      default: null
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
      required: [true, "Author is required!"],
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
