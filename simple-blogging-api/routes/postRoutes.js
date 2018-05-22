const postRouter = require("express").Router();
const postController = require("../controllers/postController");

postRouter.get("/", postController.getPosts);

postRouter.post("/", postController.createPost);

postRouter.get("/:postId", postController.getPost);

postRouter.put("/:postId", postController.updatePost);

postRouter.delete("/:postId", postController.deletePost);

module.exports = postRouter;
