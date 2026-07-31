import fs from "fs";
import path from "path";
import Settings from "../models/settingsModel.js";

// ---------------- Upload Profile Image ----------------

export const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded.",
      });
    }

    let settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Portfolio settings not found.",
      });
    }

    // Delete old image
    if (settings.profileImage) {
      const oldPath = path.join(process.cwd(), settings.profileImage);

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    settings.profileImage = req.file.path.replace(/\\/g, "/");

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Profile image uploaded successfully.",
      data: settings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- Upload Resume ----------------

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded.",
      });
    }

    let settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Portfolio settings not found.",
      });
    }

    // Delete old resume
    if (settings.resume) {
      const oldPath = path.join(process.cwd(), settings.resume);

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    settings.resume = req.file.path.replace(/\\/g, "/");

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully.",
      data: settings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- Delete Profile Image ----------------

export const deleteProfileImage = async (req, res) => {
  try {
    const settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings || !settings.profileImage) {
      return res.status(404).json({
        success: false,
        message: "Profile image not found.",
      });
    }

    const filePath = path.join(process.cwd(), settings.profileImage);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    settings.profileImage = "";

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Profile image deleted successfully.",
      data: settings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- Delete Resume ----------------

export const deleteResume = async (req, res) => {
  try {
    const settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings || !settings.resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    const filePath = path.join(process.cwd(), settings.resume);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    settings.resume = "";

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully.",
      data: settings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};