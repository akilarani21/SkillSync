import mongoose from "mongoose";

const swapRequestSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    offeredSkill: {
      type: String,
      required: true,
    },

    wantedSkill: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
      maxlength: 300,
    },

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const SwapRequest = mongoose.model(
  "SwapRequest",
  swapRequestSchema
);

export default SwapRequest;