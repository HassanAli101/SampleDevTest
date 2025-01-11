import axios from "axios";

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post("http://localhost:4000/auth/login", data, {
    withCredentials: true,
  });
  return response.data;
};
