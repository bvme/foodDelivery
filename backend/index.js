import express from "express";
import mongoose from "mongoose";
import { users } from "./router/user.js";
import { orders } from "./router/order.js";
import { foods } from "./router/food.js";
import { category } from "./router/category.js";
import dotenv from "dotenv";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/users", users);
app.use("/order", orders);
app.use("/foods", foods);
app.use("/category", category);

const getConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected succesfully");
  } catch (error) {
    console.log(`Failed with error: ${error.message}`);
  }
};
getConnection();

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("database connected succesfully"))
//   .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
