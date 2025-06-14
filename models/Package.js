import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  stay: { type: String, required: true },
  image: { type: String},
});
const Package = mongoose.model("Package", PackageSchema);
export default Package