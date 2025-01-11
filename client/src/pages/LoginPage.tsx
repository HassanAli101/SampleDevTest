import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../services/state/Auth";
import { useLoginForm } from "../hooks/useLoginForm";
import { loginUser } from "../services/api/auth";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserStatus, setUserEmail, setUserToken } = useAuthStore();

  const { control, handleSubmit, errors } = useLoginForm();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const userInfo = await loginUser(data);
      setUserEmail(userInfo.user.email);
      setUserStatus(true);
      setUserToken(userInfo.token);
      alert("Login Successful");
      navigate("/VehicleForm");
    } catch (error: any) {
      console.error("Error during login:", error.message);
      alert("Login Failed");
    }
  };

  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        LOGIN
      </h1>
      <LoginForm
        control={control}
        errors={errors}
        onSubmit={handleLogin}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
