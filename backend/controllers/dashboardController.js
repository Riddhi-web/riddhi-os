import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Certificate from "../models/Certificate.js";
import Achievement from "../models/Achievement.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalProjects,
      totalSkills,
      totalExperience,
      totalEducation,
      totalCertificates,
      totalAchievements,
    ] = await Promise.all([
      Project.countDocuments(),
      Skill.countDocuments(),
      Experience.countDocuments(),
      Education.countDocuments(),
      Certificate.countDocuments(),
      Achievement.countDocuments(),
    ]);

    res.status(200).json({
      totalProjects,
      totalSkills,
      totalExperience,
      totalEducation,
      totalCertificates,
      totalAchievements,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to load dashboard statistics.",
    });
  }
};