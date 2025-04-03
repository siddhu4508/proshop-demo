import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @description Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @description Register user
// @route POST /api/users/login
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @description Logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @description Get user Profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @description Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @description Get users
// @route GET /api/users/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @description Get user by ID
// @route GET /api/users/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user id");
});

// @description Delete user
// @route DELETE /api/users/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @description Update user
// @route PUT /api/users/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
