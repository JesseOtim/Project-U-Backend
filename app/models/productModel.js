import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
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
  quantity: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Book = mongoose.model("book", bookSchema);

export default Book;
