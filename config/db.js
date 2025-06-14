import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("db connected ...");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/tourApp`);
  } catch (error) {
    console.log(error.message);
  }
}; 
