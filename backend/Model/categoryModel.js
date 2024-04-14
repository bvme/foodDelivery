import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const CategorySchema = new Schema({
  categoryName: String,
  foodId: {
    type: Schema.Types.ObjectId,
    ref: COLLECTIONS.FOOD,
  },
});
export const categoryModel = model("category", CategorySchema);
