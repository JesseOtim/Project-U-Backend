import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    lowercase: true,
  },

  lastname: {
    type: String,
    trim: true,
    lowercase: true,
  },

  uniqueid: {
    type: String,
    trim: true,
    lowercase: true,
  },

  dob: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },

  password: {
    type: String,
  },

  phonenumber: {
    type: String,
    trim: true,
  },

  nin: {
    type: String,
    trim: true,
  },

  role: {
    type: String,
    default: "user",
    lowercase: true,
    trim: true,
  },

  address: {
    type: String,
    default: "user",
    lowercase: true,
    trim: true,
  },

  ward: {
    type: String,
    default: "user",
    lowercase: true,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
