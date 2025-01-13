"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = exports.Login = void 0;
const AuthService_1 = require("../services/AuthService");
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { user, token } = yield (0, AuthService_1.LoginUser)({ email, password });
        res.status(200).json({ message: "Login successful", user, token });
    }
    catch (error) {
        res.status(500).json({ msg: "Failed to Login User" });
    }
});
exports.Login = Login;
const VerifyToken = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = (0, AuthService_1.VerifyUser)({ token });
        res.status(200).json({ LoggedIn: decoded.LoggedIn });
    }
    catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
exports.VerifyToken = VerifyToken;
//# sourceMappingURL=AuthController.js.map