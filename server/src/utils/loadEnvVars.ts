import dotenv from "dotenv";
import { logger } from "./logger";

export const loadEnvVars = (envPath: string) => {
  dotenv.config({ path: envPath });
  logger.info("Environment variables Status: ", process.env.STATUS);
};
