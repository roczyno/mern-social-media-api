const {
  createPost,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPost,
  getTimelinePost,
  getAllUsersPost,
} = require("../controllers/post.controllers");
const { verifyTokenAndAuthorization } = require("../verifyToken");

const router = require("express").Router();

//create a post

router.post("/", createPost);
//update a post

router.put("/:id", verifyTokenAndAuthorization, updatePost);
//delete a post

router.delete("/:id", verifyTokenAndAuthorization, deletePost);
//like / dislike a post

router.put("/:id/like", likeOrUnlikePost);
//get a post

router.get("/:id", getPost);

//get timeline posts

router.get("/timeline/:userId", getTimelinePost);

//get all users post

router.get("/profile/:username", getAllUsersPost);

module.exports = router;
