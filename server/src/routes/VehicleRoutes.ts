import express from "express";
import { AddVehicle, GetVehicles } from "../controllers/VehicleController";
import { authorizeLoggedIn, authenticateJWT } from "../middlewares/auth";

import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../UserUploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post(
  "/addVehicle",
  authenticateJWT,
  authorizeLoggedIn,
  upload.array("pictureURLs"),
  AddVehicle
);
router.get("/getVehicles", authenticateJWT, authorizeLoggedIn, GetVehicles);

export default router;
