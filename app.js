import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express();

config({
  path : "./data/config.env"
})

//cant access request.body items without this middleware
app.use(express.json());//keep it on the top
app.use(cookieParser())
app.use(cors({
  origin : [process.env.FRONTEND_URL],
  credentials : true,
  methods: ["GET","PUT","DELETE","POST"],

}))


//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task",taskRouter );

app.get("/", (req, res) => {
  res.send("nice working");
});


app.use(errorMiddleware)