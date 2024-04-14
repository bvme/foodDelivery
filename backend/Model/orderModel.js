import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: COLLECTIONS.USER,
  },
  orderNumber: Number,
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: COLLECTIONS.FOOD,
    },
  ],
  totalPrice: Number,
  process: {
    type: String,
    enum: ["PROGESS", "DELIVERED", "WAITING", "ACTIVE"], // [ "PAID" , "NOT PAID"]
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  district: String,
  khoroo: String,
  apartment: String,
});

export const OrderModel = model("Order", OrderSchema);
