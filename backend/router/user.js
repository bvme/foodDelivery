import { Router } from "express";
import { getAllUsers, addUser, updateProfile, logIn } from "../controller/user.js";

const users = Router();

users.route("/").get(getAllUsers);
users.route("/signup").post(addUser);
users.route("/login").post(logIn);
users.route("/userprofile").get(getAllUsers).patch(updateProfile);

export { users };
