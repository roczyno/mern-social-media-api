const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} = require("../controllers/user.controllers");

const router = require("express").Router();

//update user
router.put("/:id", updateUser);
//deleter user
router.delete("/:id", deleteUser);

//get a user

router.get("/", getUser);
//follow a user

router.put("/:id/follow", followUser);
//unfollow a user
router.put("/:id/unfollow", unfollowUser);
module.exports = router;
