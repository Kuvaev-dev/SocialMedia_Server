import express from "express";
import userAuth from "../middleware/authMiddleware";
import {
  createPost,
  getPosts,
  getPost,
  getUserPost,
  getComments,
  likePost,
  likePostComment,
  commentPost,
  replyPostComment,
  deletePost,
} from "../controllers/postController";

const router = express.Router();

// Crete post
router.post("/create-post", userAuth, createPost);
// Get post
router.post("/", userAuth, getPosts);
router.post("/:id", userAuth, getPost);

router.post("/get-user-post/:id", userAuth, getUserPost);

// Get comments
router.get("/comments/:postId", getComments);

// Like and comment on posts
router.post("/like/:id", userAuth, likePost);
router.post("/like-comment/:id/:rid?", userAuth, likePostComment);
router.post("/comment/:id", userAuth, commentPost);
router.post("/reply-comment/:id", userAuth, replyPostComment);

// Delete post
router.delete("/:id", userAuth, deletePost);

export default router;
