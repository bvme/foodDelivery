import { UserModel } from "../Model/userModel.js";
import bcrypt from "bcrypt";

// sign up section
// export const createTable = async (request, response) => {
//   const { name, password, email, role } = request.body;
//   try {
//     const data = await UserModel.create({
//       name: name,
//       email: email,
//       password: password,
//       role: role,
//     });
//     console.log(data);
//     response.send(`users data is created`);
//   } catch (err) {
//     console.error(err);
//     response.status(400).json({ message: "Failed to create user" });
//   }
// };

export const getAllUsers = async (request, response) => {
  try {
    const data = await UserModel.find();
    response.send(data);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Failed to retrieve users" });
  }
};
 
export const addUser = async (request, response) => {
  const { name, password, email, phoneNumber } = request.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const newUser = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      role: "USER",
    });
    response.send(newUser);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add user" });
  }
};
 
export const logIn = async (request, response) => {
  const { email, password } = request.body;
 
  try {
    const userValidation = await UserModel.findOne({ email: email });
    if (!userValidation)
      return response
        .status(404)
        .json({ success: false, message: "User does not exist!" });
 
    const correctPassword = await bcrypt.compare(
      password,
      userValidation.password
    );
    if (!correctPassword)
      return response
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
 
    response.send(userValidation);
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (request, response) => {
  const { name: name, phoneNumber: phoneNumber, email: email } = request.body;

  try {
    const userData = await UserModel.findByIdAndUpdate(req.params.userId, {
      name,
      email,
      phoneNumber,
    });
    if (!userData) {
      return response.status(404).json({ message: "User not found" });
    }

    response.send(userData);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Failed to find user" });
  }
};
