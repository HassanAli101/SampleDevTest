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
exports.GetVehicles = exports.AddVehicle = void 0;
const VehicleService_1 = require("../services/VehicleService");
const functions_1 = require("../utils/functions");
const AddVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !Array.isArray(req.files)) {
            res.status(400).json({ msg: "No files uploaded" });
            return;
        }
        const { carModel, price, phoneNumber, numPictures, email, userLoggedIn } = req.body;
        const pictureUrls = (0, functions_1.generatePictureUrls)(req);
        yield (0, VehicleService_1.AddVehicleToDB)({
            carModel,
            price,
            phoneNumber,
            numPictures,
            pictureUrls,
            email,
            userLoggedIn,
        });
        res.status(200).json({ msg: "Vehicle Added" });
    }
    catch (error) {
        console.error("Error while adding Vehicle: ", error.message || error);
        res.status(500).json({ msg: "Failed to add Vehicle" });
    }
});
exports.AddVehicle = AddVehicle;
const GetVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield (0, VehicleService_1.GetVehiclesFromDB)();
        res.status(200).json(items);
    }
    catch (error) {
        console.log("Error while getting Vehicles: " + error);
        res.status(404).json({ msg: "failed to get Vehicles" });
    }
});
exports.GetVehicles = GetVehicles;
//# sourceMappingURL=VehicleController.js.map