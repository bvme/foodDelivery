import { Schema, model } from "mongoose";

export const FoodSchema = new Schema({
  foodName: String,
  image: String,
  ingredient: String,
  price: Number,
});
export const foodModel = model("food", FoodSchema);
