import { AddVehicleToDB, GetVehiclesFromDB } from "../services/VehicleService";
import { Request, Response } from "express";
import { generatePictureUrls } from "../utils/functions";

export const AddVehicle = async (req: Request, res: Response) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      res.status(400).json({ msg: "No files uploaded" });
      return;
    }
    const { carModel, price, phoneNumber, numPictures, email, userLoggedIn } =
      req.body;
    const pictureUrls = generatePictureUrls(req);
    await AddVehicleToDB({
      carModel,
      price,
      phoneNumber,
      numPictures,
      pictureUrls,
      email,
      userLoggedIn,
    });
    res.status(200).json({ msg: "Vehicle Added" });
  } catch (error) {
    console.error("Error while adding Vehicle: ", error.message || error);
    res.status(500).json({ msg: "Failed to add Vehicle" });
  }
};

export const GetVehicles = async (req: Request, res: Response) => {
  try {
    const items = await GetVehiclesFromDB();
    res.status(200).json(items);
  } catch (error) {
    console.log("Error while getting Vehicles: " + error);
    res.status(404).json({ msg: "failed to get Vehicles" });
  }
};
