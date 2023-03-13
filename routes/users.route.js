const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} = require("../controllers/user.controllers");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

const router = require("express").Router();

//update user
router.put("/:id", verifyTokenAndAuthorization, updateUser);
//deleter user
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//get a user

router.get("/", verifyTokenAndAdmin, getUser);
//follow a user

router.put("/:id/follow", followUser);
//unfollow a user
router.put("/:id/unfollow", unfollowUser);
module.exports = router;
