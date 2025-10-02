import express from "express";
import {
  createbook,
  deletebook,
  getbookById,
  getbooks,
  updatebook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createbook);
router.get("/", getbooks);
router.get("/:id", getbookById);
router.put("/:id", updatebook);
router.delete("/:id", deletebook);

export default router;
