import Package from "../models/Package.js";
import { v2 as cloudinary } from "cloudinary";
export const addNewPackagae = async (req, res) => {
  try {
    const { name, price,stay } = req.body;
    // console.log(`name :${name} ... price:${price}`)
    const image = req.file;
    let imageURL = "";
    // console.log(image)
    if (!name || !price || !stay) {
      return res
        .status(404)
        .json({ success: false, message: "Need Name and Price " });
    }
    if (image) {
      const imageUpload = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });

      imageURL = imageUpload.secure_url;
      // console.log(imageURL);
    }

    const PackageData = { name: name, price: price, image: imageURL ,stay:stay };
    const newPackage = new Package(PackageData);
      const packages = await newPackage.save();
    //   console.log('package added')
    return res
      .status(201)
      .json({ success: true, message: "Package Added", packages });
  } catch (error) {
    console.log(error);
  }
};


export const fetchPackages = async (req, res) => {
  try {
    const data = await Package.find();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error", error });
  }
};