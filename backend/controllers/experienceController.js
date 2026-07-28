import Experience from "../models/Experience.js";

// @desc Get all experiences
// @route GET /api/experience
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });

    res.status(200).json({
      success: true,
      data: experiences,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Create experience
// @route POST /api/experience
export const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Update experience
// @route PUT /api/experience/:id
export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Delete experience
// @route DELETE /api/experience/:id
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    await experience.deleteOne();

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};