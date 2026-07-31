import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure upload directories exist
const profileDir = "uploads/profile";
const resumeDir = "uploads/resume";

if (!fs.existsSync(profileDir)) {
  fs.mkdirSync(profileDir, { recursive: true });
}

if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

// ---------- Profile Image Storage ----------
const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, profileDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    cb(null, `profile-${Date.now()}${ext}`);
  },
});

// ---------- Resume Storage ----------
const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resumeDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    cb(null, `resume-${Date.now()}${ext}`);
  },
});

// ---------- Filters ----------

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."));
  }
};

const pdfFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed."));
  }
};

export const uploadProfile = multer({
  storage: profileStorage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const uploadResume = multer({
  storage: resumeStorage,
  fileFilter: pdfFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});