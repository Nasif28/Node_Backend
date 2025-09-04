import express from "express";
import {
  createbook,
  deletebook,
  getbookById,
  getbooks,
  updatebook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createbook); // POST   /books
router.get("/", getbooks); // GET    /books
router.get("/:id", getbookById); // GET    /books/:id
router.put("/:id", updatebook); // PUT    /books/:id
router.delete("/:id", deletebook); // DELETE /books/:id

export default router;
