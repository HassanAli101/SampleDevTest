import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";
import { LoginProps, ReqUser, VerifyProps } from "../utils/types";

const SECRET_KEY = process.env.SECRET_KEY;

export const LoginUser = async ({ username, password }: LoginProps) => {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    const payload: ReqUser = { username: user.username, LoggedIn: true };
    const token: string = jwt.sign(payload, SECRET_KEY);
    return { user, token };
  } catch (error) {
    console.error("Error in AuthService Login: ", error.message || error);
    throw new Error("Failed to login User");
  }
};

export const VerifyUser = ({ token }: VerifyProps) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error("Error in AuthService Verify: ", error.message || error);
    throw new Error("Failed to Verify User");
  }
};
