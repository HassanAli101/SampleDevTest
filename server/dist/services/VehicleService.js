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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVehiclesFromDB = exports.AddVehicleToDB = void 0;
const VehicleModel_1 = __importDefault(require("../models/VehicleModel"));
const AddVehicleToDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ carModel, price, phoneNumber, numPictures, pictureUrls, email, userLoggedIn, }) {
    try {
        const newVehicle = new VehicleModel_1.default({
            carModel,
            price,
            phoneNumber,
            numPictures,
            pictureUrls,
            email,
            userLoggedIn,
        });
        return yield newVehicle.save();
    }
    catch (error) {
        console.error("Error in VehicleService AddVehicleToDB: ", error.message || error);
        throw new Error("Failed to add Vehicle");
    }
});
exports.AddVehicleToDB = AddVehicleToDB;
const GetVehiclesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield VehicleModel_1.default.find();
    }
    catch (error) {
        console.error("Error in VehicleService GetVehiclesFromDB: ", error.message || error);
        throw new Error("Failed to Get vehicles");
    }
});
exports.GetVehiclesFromDB = GetVehiclesFromDB;
//# sourceMappingURL=VehicleService.js.map