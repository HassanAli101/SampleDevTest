import VehicleModel from "../models/VehicleModel";
import { AddVehicleToDBProps } from "../utils/types";

export const AddVehicleToDB = async ({
  carModel,
  price,
  phoneNumber,
  numPictures,
  pictureURLs,
  email,
  userLoggedIn,
}: AddVehicleToDBProps) => {
  try {
    const newVehicle = new VehicleModel({
      carModel,
      price,
      phoneNumber,
      numPictures,
      pictureURLs,
      email,
      userLoggedIn,
    });
    return await newVehicle.save();
  } catch (error) {
    console.error(
      "Error in VehicleService AddVehicleToDB: ",
      error.message || error
    );
    throw new Error("Failed to add Vehicle");
  }
};

export const GetVehiclesFromDB = async () => {
  try {
    return await VehicleModel.find();
  } catch (error) {
    console.error(
      "Error in VehicleService GetVehiclesFromDB: ",
      error.message || error
    );
    throw new Error("Failed to Get vehicles");
  }
};
