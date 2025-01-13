import axios from "axios";

//localhost:4000 for running locally, domain name for deployment
export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(
    "https://rhodium-dev-test-server.vercel.app/auth/login",
    data
  );
  return response.data;
};