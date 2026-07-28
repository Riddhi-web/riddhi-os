import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    techStack: {
      type: [String],
      default: [],
    },

    github: {
      type: String,
      default: "",
    },

    liveDemo: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress", "Planned"],
      default: "Completed",
    },

    category: {
      type: String,
      enum: ["Web", "Mobile", "AI", "UI/UX", "Open Source", "Other"],
      default: "Web",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;