const express = require("express");
const router  = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/controller.js");

const {
  createUserRules,
  updateUserRules,
} = require("../middlewares/validation.js");

// ┌─────────────────────────────────────────────┐
// │              User CRUD Routes               │
// ├──────────┬──────────────────────────────────┤
// │ Method   │ Endpoint                         │
// ├──────────┼──────────────────────────────────┤
// │ GET      │ /users          — all users      │
// │ GET      │ /users/:id      — user by ID      │
// │ POST     │ /users          — create new user  │
// │ PUT      │ /users/:id      — update user     │
// │ DELETE   │ /users/:id      — delete user      │
// └──────────┴──────────────────────────────────┘

router.get   ("/",    getAllUsers);
router.get   ("/:id", getUserById);
router.post  ("/",    createUserRules, createUser);
router.put   ("/:id", updateUserRules, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
