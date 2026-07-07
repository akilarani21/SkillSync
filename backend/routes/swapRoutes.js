import express from "express";
import {
  createSwapRequest,
  getMySwapRequests,
  updateSwapStatus,
} from "../controllers/swapController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSwapRequest);

router.get("/", protect, getMySwapRequests);

router.put("/:id", protect, updateSwapStatus);

export default router;