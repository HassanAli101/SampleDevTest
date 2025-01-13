"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogger = exports.logger = void 0;
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json, prettyPrint, errors } = winston_1.default.format;
const logDirectory = path_1.default.resolve(__dirname, "../Logs");
exports.logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp(), json(), prettyPrint()),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(logDirectory, "AllLogs.log"),
        }),
    ],
});
exports.ErrorLogger = winston_1.default.createLogger({
    level: "error",
    format: combine(timestamp(), json(), prettyPrint(), errors({ stack: true })),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(logDirectory, "ErrorLogs.log"),
        }),
        new winston_1.default.transports.File({
            filename: path_1.default.join(logDirectory, "AllLogs.log"),
        }),
    ],
});
//# sourceMappingURL=logger.js.map