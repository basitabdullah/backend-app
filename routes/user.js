import express from "express";
import { getAllUsers, getUserDetails, login, register } from "../controllers/user.js";

//creating router
const router = express.Router();

//all users
router.get("/all", getAllUsers);

//create user
router.post("/new", register);

router.post("/login", login);

//dynamic routing
router.get("/userid/:id", getUserDetails);

export default router;
