import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { CustomRequest, ReqUser } from "../utils/types";
import { logger } from "../utils/logger";

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.info("Unauthorized Access triggered for req: ", req);
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as ReqUser;
    req.user = decoded;
    logger.info("Authrized: ", decoded);
    next();
  } catch (error) {
    logger.info(
      "JWT verification for invalid token failed: ",
      error.message || error
    );
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
  logger.info("user Status in authorize Logged in is: ", userStatus);

  if (!userStatus) {
    logger.info("user Not logged in");
    res.status(403).json({ message: "Forbidden: Not Logged In" });
    return;
  }

  logger.info("user Authorized");

  next();
};
