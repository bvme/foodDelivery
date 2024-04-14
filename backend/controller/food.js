import { foodModel } from "../Model/foodModel.js";

export const addFood = async (request, response) => {
  const { foodName, image, ingredient, price } = request.body;
  try {
    const data = await foodModel.create({
      foodName: foodName,
      image: image,
      ingredient: ingredient,
      price: price,
    });
    response.send(data);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add food" });
  }
};
