import express from "express";
import { addDestination, fetchDestination } from "../controller/destination.js";
import upload from "../middleware/multer.js";
import { addNewPackagae, fetchPackages } from "../controller/packages.js";
const router = express.Router();

router.post("/addDestination",upload.single("image"),addDestination)
router.get("/destinations", fetchDestination);

router.post("/add-package",upload.single("image"), addNewPackagae);
router.get("/packages/top-selling", fetchPackages);

export default router;
