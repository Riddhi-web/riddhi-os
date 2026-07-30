import Settings from "../models/settingsModel.js";

// Get Portfolio Settings
export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings) {
      return res.status(200).json({
        success: true,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create or Update Portfolio Settings
export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne().sort({ createdAt: -1 });

    if (!settings) {
      settings = await Settings.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Portfolio settings created successfully.",
        data: settings,
      });
    }

    settings = await Settings.findByIdAndUpdate(
      settings._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Portfolio settings updated successfully.",
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};