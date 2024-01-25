import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
  register,
  special,
  updateUser,
} from "../controllers/user.js";

//creating router
const router = express.Router();

//all users
router.get("/all", getAllUsers);

//create user
router.post("/new", register);

//special
router.get("/userid/special", special);

//dynamic routing
router.get("/userid/:id", getUserDetails);

//put request
router.put("/userid/:id", updateUser);

//del
router.delete("/userid/:id", deleteUser);

export default router;
