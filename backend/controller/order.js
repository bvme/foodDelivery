import { OrderModel } from "../Model/orderModel.js";

export const addOrder = async (request, response) => {
  const {
    userId,
    foods,
    totalPrice,
    progress,
    createdDate,
    district,
    khoroo,
    apartment,
  } = request.body;
  try {
    const data = await OrderModel.create({
      userId: userId,
      foods: foods,
      totalPrice: totalPrice,
      progress: progress,
      createdDate: createdDate,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
    });
    response.send(data);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add order" });
  }
};
