import { Router } from "express";
import { addOrder } from "../controller/order.js";

const orders = Router();

orders.route("/").post(addOrder);

export { orders };
