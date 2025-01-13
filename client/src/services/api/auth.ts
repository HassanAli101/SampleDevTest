import axios from "axios";

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(
    "https://rhodium-dev-test.vercel.app/auth/login",
    data
  );
  return response.data;
};