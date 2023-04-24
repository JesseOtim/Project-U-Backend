import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
ft-models

  name: {
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

  productimage: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  category: {
    type: String,
    required: true,
    unique: true,
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
