import express from "express";
import { getProfile, updateProfile } from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET logged-in user's profile
router.get("/", protect, getProfile);

// UPDATE logged-in user's profile
router.put("/", protect, updateProfile);

export default router;