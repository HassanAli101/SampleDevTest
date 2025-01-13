import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../state/Auth";
import axiosInstance from "./AxiosInstance";

const PrivateRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const authToken = useAuthStore((state) => state.userToken);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (!authToken) {
          setIsAuthorized(false);
          return;
        }
        const response = await axiosInstance.post("/auth/verify");
        const { LoggedIn } = response.data;
        if (LoggedIn) {
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setIsAuthorized(false);
      }
    };
    verifyUser();
  }, [authToken]);
  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }
  if (!isAuthorized) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default PrivateRoute;
