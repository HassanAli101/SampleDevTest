import dotenv from "dotenv";

export const loadEnvVars = (envPath: string) => {
  dotenv.config({ path: envPath });
  console.log("Environment variables Status: ", process.env.STATUS);
};
