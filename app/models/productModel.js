import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  price: {
    type: String,
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
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
