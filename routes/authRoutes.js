import express from "express";
import { register, login, profile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { loginLimiter } from "../middleware/loginLimiter.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/profile", protect, profile);

export default router;
