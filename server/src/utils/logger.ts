import path from "path";
import winston from "winston";
const { combine, timestamp, json, prettyPrint, errors } = winston.format;

const logDirectory = path.resolve(__dirname, "../Logs");

export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json(), prettyPrint()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logDirectory, "AllLogs.log"),
    }),
  ],
});

export const ErrorLogger = winston.createLogger({
  level: "error",
  format: combine(timestamp(), json(), prettyPrint(), errors({ stack: true })),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logDirectory, "ErrorLogs.log"),
    }),
    new winston.transports.File({
      filename: path.join(logDirectory, "AllLogs.log"),
    }),
  ],
});
