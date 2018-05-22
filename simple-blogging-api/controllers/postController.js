const Post = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

const createPost = async (req, res) => {
  try {
    let post = new Post(req.body);
    post = await post.save();

    res
      .status(201)
      .location(`/api/posts/${post._id}`)
      .send();
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).send({message: "Post not found!"});
    }

    res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

const updatePost = async (req, res) => {
  try {
    const {title, content, author, imageUrl, tags, status} = req.body;

    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      {$set: {title, content, author, imageUrl, tags, status}},
      {new: true, runValidators: true}
    );

    if (!post) {
      return res.status(404).send({message: "Post not found!"});
    }

    res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.postId);

    if (!post) {
      return res.status(404).send({message: "Post not found!"});
    }

    res.status(204).send();
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
};
