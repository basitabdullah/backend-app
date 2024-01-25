import express from "express";
import { getAllUsers, getMyProfile, login, register } from "../controllers/user.js";

//creating router
const router = express.Router();

//all users
router.get("/all", getAllUsers);

//create user
router.post("/new", register);

router.post("/login", login);

//dynamic routing
router.get("/me", getMyProfile);

export default router;
