import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    totalVisitors: {
      type: Number,
      default: 0,
    },

    resumeDownloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Analytics", analyticsSchema);