import axios from "axios";
import useAuthStore from "../state/Auth";

//localhost:4000 for running locally, domain name for deployment
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // Base URL
});

//Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const { userToken } = useAuthStore.getState();
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
});

export default axiosInstance;
