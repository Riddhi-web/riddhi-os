import Education from "../models/Education.js";

// @desc Get all education records
// @route GET /api/education
export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });

    res.status(200).json({
      success: true,
      data: educations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Create education
// @route POST /api/education
export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Update education
// @route PUT /api/education/:id
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Delete education
// @route DELETE /api/education/:id
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    await education.deleteOne();

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};