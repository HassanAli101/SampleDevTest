"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./logger");
const loadEnvVars = (envPath) => {
    dotenv_1.default.config({ path: envPath });
    logger_1.logger.info("Environment variables Status: ", process.env.STATUS);
};
exports.loadEnvVars = loadEnvVars;
//# sourceMappingURL=loadEnvVars.js.map