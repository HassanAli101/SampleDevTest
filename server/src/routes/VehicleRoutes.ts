import express from "express";
import { AddVehicle, GetVehicles } from "../controllers/VehicleController";
import { authorizeLoggedIn, authenticateJWT } from "../middlewares/auth";

const router = express.Router();

router.post("/addVehicle", authenticateJWT, authorizeLoggedIn, AddVehicle);
router.get("/getVehicles", authenticateJWT, authorizeLoggedIn, GetVehicles);

export default router;
