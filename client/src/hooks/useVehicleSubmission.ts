import { useState } from "react";
import { SubmitVehicleInfo } from "../services/api/vehicle";
import { useNavigate } from "react-router-dom";

const useVehicleSubmission = (email: string, LoggedIn: boolean) => {
  const [customError, setCustomError] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = async (data: {
    carModel: string;
    price: number;
    phoneNumber: number;
    maxPictures: number;
    pictures: File[];
  }) => {
    try {
      if (data.pictures.length > data.maxPictures) {
        setCustomError("Number of Pictures Exceed Max Limit.");
        setSnackbarMessage("Number of Pictures Exceeds Max Limit.");
        setSnackbarOpen(true);
        setTimeout(() => {
          setCustomError("");
          setSnackbarOpen(false);
        }, 4000);
        return;
      }

      const requestData = {
        carModel: data.carModel,
        price: data.price,
        phoneNumber: data.phoneNumber,
        numPictures: data.maxPictures,
        pictureURLs: data.pictures,
        email,
        userLoggedIn: LoggedIn,
      };

      setSnackbarMessage(
        "Submitting Vehicle Information, you will be redirected shortly..."
      );
      setSnackbarOpen(true);

      const response = await SubmitVehicleInfo(requestData);
      if (response.status === 200) {
        setSnackbarMessage("Vehicle submitted.");
        setSnackbarOpen(true);
      }
      navigate("/VehicleView");
    } catch (error: any) {
      setSnackbarMessage(
        "Vehicle Submission failed. Please contact the developer to assist you."
      );
      setSnackbarOpen(true);
    }

    setTimeout(() => {
      setSnackbarOpen(false);
    }, 4000);
  };

  return {
    customError,
    snackbarOpen,
    snackbarMessage,
    onSubmit,
    setSnackbarOpen,
  };
};

export default useVehicleSubmission;
