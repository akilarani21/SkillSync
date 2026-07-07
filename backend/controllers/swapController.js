import SwapRequest from "../models/SwapRequest.js";

/**
 * @desc    Send a skill swap request
 * @route   POST /api/swaps
 * @access  Private
 */
export const createSwapRequest = async (req, res, next) => {
  try {
    const {
      receiver,
      offeredSkill,
      wantedSkill,
      message,
    } = req.body;

    // Validation
    if (!receiver || !offeredSkill || !wantedSkill) {
      return res.status(400).json({
        success: false,
        message: "Receiver, offered skill and wanted skill are required.",
      });
    }

    // Prevent sending request to yourself
    if (receiver === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot send a request to yourself.",
      });
    }

    // Prevent duplicate pending request
    const existingRequest = await SwapRequest.findOne({
      sender: req.user._id,
      receiver,
      offeredSkill,
      wantedSkill,
      status: "Pending",
    });

    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message: "A pending request already exists.",
      });
    }

    const swap = await SwapRequest.create({
      sender: req.user._id,
      receiver,
      offeredSkill,
      wantedSkill,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Swap request sent successfully.",
      swap,
    });

  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all requests for logged-in user
 * @route   GET /api/swaps
 * @access  Private
 */
export const getMySwapRequests = async (req, res, next) => {
  try {

    const swaps = await SwapRequest.find({
      $or: [
        { sender: req.user._id },
        { receiver: req.user._id },
      ],
    })
      .populate("sender", "name avatar")
      .populate("receiver", "name avatar")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: swaps.length,
      swaps,
    });

  } catch (error) {
    next(error);
  }
};

export const updateSwapStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!["Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const swap = await SwapRequest.findById(req.params.id);

    if (!swap) {
      return res.status(404).json({
        success: false,
        message: "Swap request not found.",
      });
    }

    // Only the receiver can update
    if (swap.receiver.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized.",
      });
    }

    swap.status = status;

    await swap.save();

    res.json({
      success: true,
      message: `Request ${status}.`,
      swap,
    });

  } catch (error) {
    next(error);
  }
};