import Project from "../models/Project.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      github,
      liveDemo,
      image,
      featured,
      status,
      category,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      github,
      liveDemo,
      image,
      featured,
      status,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully.",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Project
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      github,
      liveDemo,
      image,
      featured,
      status,
      category,
    } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        techStack,
        github,
        liveDemo,
        image,
        featured,
        status,
        category,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};