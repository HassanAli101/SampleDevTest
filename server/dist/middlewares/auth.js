"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeLoggedIn = exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("../utils/logger");
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        logger_1.logger.info("Unauthorized Access triggered for req: ", req);
        res.status(401).json({ message: "Unauthorized access" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded;
        logger_1.logger.info("Authrized: ", decoded);
        next();
    }
    catch (error) {
        logger_1.logger.info("JWT verification for invalid token failed: ", error.message || error);
        res.status(403).json({ message: "Invalid or expired token" });
        return;
    }
};
exports.authenticateJWT = authenticateJWT;
const authorizeLoggedIn = (req, res, next) => {
    const userStatus = req.user.LoggedIn;
    logger_1.logger.info("user Status in authorize Logged in is: ", userStatus);
    if (!userStatus) {
        logger_1.logger.info("user Not logged in");
        res.status(403).json({ message: "Forbidden: Not Logged In" });
        return;
    }
    logger_1.logger.info("user Authorized");
    next();
};
exports.authorizeLoggedIn = authorizeLoggedIn;
//# sourceMappingURL=auth.js.map