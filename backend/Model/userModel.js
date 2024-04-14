import { Schema, model } from "mongoose";

// nomin nertei collection uusgej bga

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 12,
    max: 20,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
    unique: true,
    trim: true,
  },
  phoneNumber: Number,

  role: {
    type: String,
    default: "USER",
    enum: ["USER", "ADMIN"],
  },
});
export const UserModel = model("User", UserSchema);
