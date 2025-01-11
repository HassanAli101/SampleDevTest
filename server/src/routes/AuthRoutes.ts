import express from "express";
import { Login, VerifyToken } from "../controllers/AuthController";

const router = express.Router();

router.post("/login", Login);
router.post("/verify", VerifyToken);

export default router;
