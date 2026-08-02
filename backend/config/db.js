import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
    console.log(connection.connection.name);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;