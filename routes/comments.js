const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

//Comment Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createComment/:id", commentController.createComment);

// router.put("/likeComment/:id", postsController.likePost);

// router.delete("/deleteComment/:id", postsController.deletePost);

module.exports = router;
