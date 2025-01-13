"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const ImageService_1 = require("../services/ImageService");
exports.upload = (0, multer_1.default)({ storage: ImageService_1.storage });
//# sourceMappingURL=Image.js.map