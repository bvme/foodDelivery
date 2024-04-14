import { categoryModel } from "../Model/categoryModel.js";

export const addCategory = async (request, response) => {
  const { categoryName, foodId } = request.body;
  try {
    const data = await categoryModel.create({
      categoryName: categoryName,
      foodId: { foodId },
    });
    response.send(data);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add food" });
  }
};
