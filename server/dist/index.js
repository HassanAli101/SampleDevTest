"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//this is the main index.ts file which combines all the work.
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { envPath } from "./utils/constants";
const path_1 = __importDefault(require("path"));
// Load environment variables
// import { loadEnvVars } from "./utils/loadEnvVars";
// loadEnvVars(envPath);
// Import DB connection
const databaseConnection_1 = __importDefault(require("./utils/databaseConnection"));
// Import Routes
const VehicleRoutes_1 = __importDefault(require("./routes/VehicleRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.use("/UserUploads", express_1.default.static(path_1.default.join(__dirname, "UserUploads")));
// Route setup
app.use("/vehicle", VehicleRoutes_1.default);
app.use("/auth", AuthRoutes_1.default);
// Default root route
app.get("/", (req, res) => {
    res.send("server is running");
});
// Connect to DB and start server
(0, databaseConnection_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map