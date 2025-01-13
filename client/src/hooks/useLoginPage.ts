import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../services/state/Auth";
import { loginUser } from "../services/api/auth";

const useLoginPage = () => {
  const navigate = useNavigate();
  const { setUserStatus, setUserEmail, setUserToken } = useAuthStore();
  const [loginError, setLoginError] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

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
      setSnackbarMessage("Login failed. Please check your credentials.");
      setSnackbarOpen(true);

      setTimeout(() => {
        setLoginError("");
        setSnackbarMessage("");
        setSnackbarOpen(false);
      }, 4000);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return {
    handleLogin,
    loginError,
    snackbarOpen,
    snackbarMessage,
    handleCloseSnackbar,
  };
};

export default useLoginPage;
