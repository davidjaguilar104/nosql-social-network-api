const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/user-controller");

// get all users and create a user routes
router.route("/").get(getAllUsers).post(createUser);

// get a user, update a user, or delete a user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// to add and delete a friend from a user's friend list
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;