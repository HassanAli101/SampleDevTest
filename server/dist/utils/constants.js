"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.envPath = void 0;
const path_1 = __importDefault(require("path"));
//environment:
exports.envPath = path_1.default.resolve(__dirname, "../../.env.local");
// populating users
exports.users = [
    { email: "Faraz@RhodiumTech.com", password: "123456abc" },
];
//# sourceMappingURL=constants.js.map