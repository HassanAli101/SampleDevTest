import { LoginUser, VerifyUser } from "../services/AuthService";
import { Response, Request } from "express";
import { ReqUser } from "../utils/types";

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await LoginUser({ email, password });
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Error while Loggin in User: ", error.message || error);
    res.status(500).json({ msg: "Failed to Login User" });
  }
};

export const VerifyToken = (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = VerifyUser({ token }) as ReqUser;
    console.log("decoded: ", decoded);
    res.status(200).json({ LoggedIn: decoded.LoggedIn });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
