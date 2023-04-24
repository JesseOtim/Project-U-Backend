import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  image: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  price: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
