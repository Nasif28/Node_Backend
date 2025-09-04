import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser); // POST   /users
router.get("/", getUsers); // GET    /users
router.get("/:id", getUserById); // GET    /users/:id
router.put("/:id", updateUser); // PUT    /users/:id
router.delete("/:id", deleteUser); // DELETE /users/:id

export default router;
