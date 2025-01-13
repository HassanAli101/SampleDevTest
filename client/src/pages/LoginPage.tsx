import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Box, Snackbar, Alert } from "@mui/material";
import useAuthStore from "../services/state/Auth";
import { loginUser } from "../services/api/auth";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserStatus, setUserEmail, setUserToken } = useAuthStore();
  const [loginError, setLoginError] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState<string>(""); // Snackbar message

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const userInfo = await loginUser(data);
      setUserEmail(userInfo.user.email);
      setUserStatus(true);
      setUserToken(userInfo.token);
      console.log("Login Successful");
      navigate("/VehicleForm");
    } catch (error: any) {
      console.error("Error during login:", error.message);
      setLoginError("Incorrect Email or Password");
      setSnackbarMessage("Login failed. Please check your credentials."); // Set the error message
      setSnackbarOpen(true); // Open the snackbar
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close the snackbar
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
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, color: "#1e40af" }}>
          WELCOME
        </Typography>

        <LoginForm onSubmit={handleLogin} customError={loginError} />

        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          <Typography variant="body2" color="textSecondary">
            Don't have an account? Please use these credentials:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Email:{" "}
            <span style={{ color: "#9c27b0" }}>Faraz@RhodiumTech.com</span>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Password: <span style={{ color: "#9c27b0" }}>123456abc</span>
          </Typography>
        </Stack>
      </Box>

      {/* Snackbar for displaying login errors */}
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
