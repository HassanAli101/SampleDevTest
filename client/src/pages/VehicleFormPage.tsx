import React from "react";
import { Typography, Box, Snackbar, Alert } from "@mui/material";
import useAuthStore from "../services/state/Auth";
import VehicleForm from "../components/VehicleForm";
import useVehicleSubmission from "../hooks/useVehicleSubmission";
import { PageBoxStyle, FormBoxStyle } from "../utils/styleConstants";

const VehicleFormPage = () => {
  const { email, LoggedIn } = useAuthStore();
  const maxFormWidth = 700;

  const {
    customError,
    snackbarOpen,
    snackbarMessage,
    onSubmit,
    setSnackbarOpen,
  } = useVehicleSubmission(email, LoggedIn);

  return (
    <Box sx={PageBoxStyle}>
      <Box sx={FormBoxStyle(maxFormWidth)}>
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#1e40af" }}>
          Submit Vehicle Information
        </Typography>

        <VehicleForm onSubmit={onSubmit} customError={customError} />

        {/* Snackbar for displaying error or success messages */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default VehicleFormPage;
