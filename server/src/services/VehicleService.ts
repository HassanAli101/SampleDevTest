import VehicleModel from "../models/VehicleModel";
import { AddVehicleToDBProps } from "../utils/types";
import { logger, ErrorLogger } from "../utils/logger";

export const AddVehicleToDB = async ({
  carModel,
  price,
  phoneNumber,
  numPictures,
  pictureUrls,
  email,
  userLoggedIn,
}: AddVehicleToDBProps) => {
  try {
    const newVehicle = new VehicleModel({
      carModel,
      price,
      phoneNumber,
      numPictures,
      pictureUrls,
      email,
      userLoggedIn,
    });
    logger.info("New Vehicle Info Added to DB with carModel: ", carModel);
    return await newVehicle.save();
  } catch (error) {
    ErrorLogger.error(
      "Error in VehicleService AddVehicleToDB: ",
      error.message || error
    );
  }
};

export const GetVehiclesFromDB = async () => {
  try {
    logger.info("Vehicle Information requested");
    return await VehicleModel.find();
  } catch (error) {
    ErrorLogger.error(
      "Error in VehicleService GetVehiclesFromDB: ",
      error.message || error
    );
  }
};
