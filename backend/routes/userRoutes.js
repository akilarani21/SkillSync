import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getUsers,
  getUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", protect, getUsers);

router.get("/:id", protect, getUserById);

export default router;