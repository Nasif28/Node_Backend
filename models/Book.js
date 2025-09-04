import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const bookSchema = new mongoose.Schema({
  id: { type: Number },
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Title cannot exceed 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Book author is required"],
    trim: true,
  },
  year: {
    type: Number,
    min: [1000, "Year must be at least 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  genre: {
    type: String,
    trim: true,
    maxLength: [50, "Genre cannot exceed 50 characters"],
  },
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

bookSchema.plugin(AutoIncrement, { inc_field: "id", id: "book_id_counter" });

const Book = mongoose.model("Book", bookSchema);
export default Book;
