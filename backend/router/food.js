import { Router } from "express";
import { addFood } from "../controller/food.js";

const foods = Router();

foods.route("/").post(addFood);

export { foods };
