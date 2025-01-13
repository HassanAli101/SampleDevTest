import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";
import { LoginProps, ReqUser, VerifyProps } from "../utils/types";
import { logger, ErrorLogger } from "../utils/logger";

const SECRET_KEY = process.env.SECRET_KEY;

export const LoginUser = async ({ email, password }: LoginProps) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      logger.info("User not found with email: ", email);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logger.info("Invalid Credentials of: ", email, password);
    }
    const payload: ReqUser = { email: user.email, LoggedIn: true };
    const token: string = jwt.sign(payload, SECRET_KEY);
    logger.info("User successfuly logged in: ", payload);
    return { user, token };
  } catch (error) {
    ErrorLogger.error("Error in AuthService LoginUser", new Error(error));
  }
};

export const VerifyUser = ({ token }: VerifyProps) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    ErrorLogger.error("Error in Authservice Verify", new Error(error));
  }
};
