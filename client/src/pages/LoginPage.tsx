import React from "react";
import { Stack, Typography, Box, Snackbar, Alert } from "@mui/material";
import LoginForm from "../components/LoginForm";
import useLoginPage from "../hooks/useLoginPage";
import {
  PageBoxStyle,
  FormBoxStyle,
  FormTitleStyle,
  SecondaryTextColor,
} from "../utils/styleConstants";
import TextBold from "../components/primitive/TextBold";

const LoginPage = () => {
  const maxWidthValue = 400;
  const {
    handleLogin,
    loginError,
    snackbarOpen,
    snackbarMessage,
    handleCloseSnackbar,
  } = useLoginPage();

  return (
    <Box sx={PageBoxStyle}>
      <Box sx={FormBoxStyle(maxWidthValue)}>
        <Typography variant="h5" sx={FormTitleStyle}>
          WELCOME
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Please Login to your account
        </Typography>

        {/* The login form */}
        <LoginForm onSubmit={handleLogin} customError={loginError} />

        {/* Acompanying text */}
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          <Typography variant="body2" color="textSecondary">
            Don't have an account? Please use these credentials:
          </Typography>
          <TextBold>
            Email:{" "}
            <span style={{ color: SecondaryTextColor }}>
              Faraz@RhodiumTech.com
            </span>
          </TextBold>
          <TextBold>
            Password:{" "}
            <span style={{ color: SecondaryTextColor }}>123456abc</span>
          </TextBold>
        </Stack>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
