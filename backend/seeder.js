import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      username: "mangariddhi1211",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Riddhi2004DB", 10);

    await Admin.create({
      username: "mangariddhi1211",
      email: "admin@riddhios.com",
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();