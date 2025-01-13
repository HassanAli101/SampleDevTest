import multer from "multer";
import { storage } from "../services/ImageService";

export const upload = multer({ storage });
