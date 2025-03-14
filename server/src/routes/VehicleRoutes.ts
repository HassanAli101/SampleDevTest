import express from "express";
import { AddVehicle, GetVehicles } from "../controllers/VehicleController";
import { authorizeLoggedIn, authenticateJWT } from "../middlewares/auth";
import { upload } from "../middlewares/Image";

const router = express.Router();

router.post(
  "/addVehicle",
  authenticateJWT,
  authorizeLoggedIn,
  upload.array("pictureURLs"),
  AddVehicle
);
router.get("/getVehicles", authenticateJWT, authorizeLoggedIn, GetVehicles);

export default router;
