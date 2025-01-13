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
// This single file populates the required users into database.
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const loadEnvVars_1 = require("./loadEnvVars");
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
const constants_1 = require("./constants");
// Load environment variables
(0, loadEnvVars_1.loadEnvVars)(constants_1.envPath);
// Connect to MongoDB and populate users
const populateUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const user of constants_1.users) {
            const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
            const newUser = new UserModel_1.default({
                email: user.email,
                password: hashedPassword,
            });
            yield newUser.save();
            console.log(`User ${user.email} populated successfully.`);
        }
        console.log("All users have been populated.");
    }
    catch (error) {
        console.error("Error populating users:", error.message || error);
    }
    finally {
        yield mongoose_1.default.disconnect();
        console.log("Disconnected from MongoDB");
    }
});
// Main execution
(0, databaseConnection_1.default)().then(populateUsers);
//# sourceMappingURL=PopulateUsers.js.map