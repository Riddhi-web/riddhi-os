import Skill from "../models/Skill.js";

// Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add skill
export const createSkill = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const skill = await Skill.create(req.body);

    res.status(201).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: error.message,
      errors: error.errors,
    });
  }
};

// Update skill
export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete skill
export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};