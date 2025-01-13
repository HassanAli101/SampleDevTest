"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeLoggedIn = exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateJWT = (req, res, next) => {
    console.log("on backend, authenticate JWT invoked");
    const authHeader = req.headers.authorization;
    console.log("auth header is: ", authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorized access" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded;
        console.log("decoded is: ", decoded, " moving onto next");
        next();
    }
    catch (error) {
        console.error("JWT verification failed:", error.message || error);
        res.status(403).json({ message: "Invalid or expired token" });
        return;
    }
};
exports.authenticateJWT = authenticateJWT;
const authorizeLoggedIn = (req, res, next) => {
    const userStatus = req.user.LoggedIn;
    console.log("user Status in authorize Logged in is: ", userStatus);
    if (!userStatus) {
        res.status(403).json({ message: "Forbidden: Not Logged In" });
        return;
    }
    console.log("authorized, moving onwards.");
    next();
};
exports.authorizeLoggedIn = authorizeLoggedIn;
//# sourceMappingURL=auth.js.map