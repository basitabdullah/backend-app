import {app} from "./app.js"
import { connectDB } from "./data/database.js";

connectDB();
//listen
app.listen(process.env.PORT, () => {
  console.log("Server is working!");
});
