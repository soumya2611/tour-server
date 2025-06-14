import express from "express";
import apiRoutes from "../routes/api.js";
import { connectDB } from "../config/db.js";
import connectCloudinary from "../config/cloudinary.js";
import cors from "cors";
const app = express();
app.use(cors());
connectDB();
connectCloudinary();
app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("hello from Server 👀 !!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
});
