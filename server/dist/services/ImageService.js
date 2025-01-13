"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path_1.default.join(__dirname, "..", "..", "public", "UserUploads");
        console.log("upload Path is: ", uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
//# sourceMappingURL=ImageService.js.map