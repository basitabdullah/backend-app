import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//collection creation
//model name should be always capital
export const User = mongoose.model("User", schema);