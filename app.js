import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
export const app = express();

config({
  path : "./data/config.env"
})

//cant access request.body items without this middleware
app.use(express.json());//keep it on the top
app.use(cookieParser())

//using routes
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("nice working");
});
