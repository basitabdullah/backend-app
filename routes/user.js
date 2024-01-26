import express from "express";
import { getAllUsers, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

//creating router
const router = express.Router();

//all users
router.get("/all", getAllUsers);

//create user
router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

//dynamic routing
router.get("/me", isAuthenticated, getMyProfile);

export default router;
