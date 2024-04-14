import { Router } from "express";
import { addCategory } from "../controller/category.js";

const category = Router();

category.route("/").post(addCategory);

export { category };
