import mongoose from "mongoose";

//db creation
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "newApiDb",
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((e) => console.log(e));
};
