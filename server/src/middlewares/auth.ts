import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { CustomRequest, ReqUser } from "../utils/types";

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  console.log("on backend, authenticate JWT invoked");
  const authHeader = req.headers.authorization;
  console.log("auth header is: ", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as ReqUser;
    req.user = decoded;
    console.log("decoded is: ", decoded, " moving onto next");
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message || error);
    res.status(403).json({ message: "Invalid or expired token" });
    return;
  }
};

export const authorizeLoggedIn = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const userStatus = req.user.LoggedIn;
  console.log("user Status in authorize Logged in is: ", userStatus);

  if (!userStatus) {
    res.status(403).json({ message: "Forbidden: Not Logged In" });
    return
  }

  console.log("authorized, moving onwards.");

  next();
};
