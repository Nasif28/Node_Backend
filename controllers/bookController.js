import mongoose from "mongoose";
import Book from "../models/Book.js";

// @desc    Create new book
export const createbook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedbook = await book.save();
    res.json(savedbook);
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(400).json({ error: err.message });
  }
};

// @desc    Get all books
export const getbooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// @desc    Get single book by ID
export const getbookById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "book not found" });
    res.json(book);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// @desc    Update book
export const updatebook = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    const updatedbook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedbook) return res.status(404).json({ error: "book not found" });
    res.json(updatedbook);
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(400).json({ error: err.message });
  }
};

// @desc    Delete book
export const deletebook = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    const deletedbook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedbook) return res.status(404).json({ error: "book not found" });
    res.json({ message: "✅ book deleted" });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
