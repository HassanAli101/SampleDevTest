import axios from "axios";

export const SubmitVehicleInfo = async (data: {
  carModel: string;
  price: number;
  phoneNumber: number;
  numPictures: number;
  pictureURLs: File[];
  email: string;
  userLoggedIn: boolean;
}) => {
  const response = await axios.post(
    "http://localhost:4000/vehicle/addVehicle",
    data
  );
  return response.data;
};

export const GetVehiclesInfo = async () => {
  const response = await axios.get("http://localhost:4000/vehicle/getVehicles");
  return response.data;
};
