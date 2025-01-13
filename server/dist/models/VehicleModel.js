"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const vehicleSchema = new Schema({
    carModel: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    numPictures: {
        type: Number,
        required: true,
    },
    pictureUrls: {
        type: [String],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userLoggedIn: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });
const Vehicle = mongoose_1.default.model("Vehicle", vehicleSchema);
exports.default = Vehicle;
//# sourceMappingURL=VehicleModel.js.map