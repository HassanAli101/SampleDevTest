import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import useAuthStore from "../services/state/Auth";
import { SubmitVehicleInfo } from "../services/api/vehicle";
import VehicleForm from "../components/VehicleForm";

const VehicleFormPage = () => {
  const navigate = useNavigate();
  const { email, LoggedIn } = useAuthStore();
  const [customError, setCustomError] = useState<string>("");

  const onSubmit = async (data: {
    carModel: string;
    price: number;
    phoneNumber: number;
    maxPictures: number;
    pictures: File[];
  }) => {
    try {
      console.log("Form Submitted: ", { ...data });
      if (data.pictures.length > data.maxPictures) {
        setCustomError("Number of Pictures Exceed Max Pictures");
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
      const response = await SubmitVehicleInfo(requestData);
      console.log("Vehicle Submitted Successfuly", response);
      navigate("/VehicleView");
    } catch (error: any) {
      console.error("Error during Vehicle Submission:", error.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #c8b6ff, #3b82f6, #1e40af)",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: 4,
          boxShadow: 3,
          width: "100%",
          maxWidth: 700,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#1e40af" }}>
          Submit Vehicle Information
        </Typography>

        <VehicleForm onSubmit={onSubmit} customError={customError}/>
      </Box>
    </Box>
  );
};

export default VehicleFormPage;
