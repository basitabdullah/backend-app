import mongoose from "mongoose";

//db creation
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "newApiDb",
    })
    .then((c) => {
      console.log(`DB connected with ${c.connection.host}`);
    })
    .catch((e) => console.log(e));
};
