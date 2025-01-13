"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VehicleController_1 = require("../controllers/VehicleController");
const auth_1 = require("../middlewares/auth");
const Image_1 = require("../middlewares/Image");
const router = express_1.default.Router();
router.post("/addVehicle", auth_1.authenticateJWT, auth_1.authorizeLoggedIn, Image_1.upload.array("pictureURLs"), VehicleController_1.AddVehicle);
router.get("/getVehicles", auth_1.authenticateJWT, auth_1.authorizeLoggedIn, VehicleController_1.GetVehicles);
exports.default = router;
//# sourceMappingURL=VehicleRoutes.js.map