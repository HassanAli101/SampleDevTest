//this is the main index.ts file which combines all the work.
import express from "express";
import cors from "cors";
import { envPath } from "./utils/constants";
import path from "path";

// Load environment variables
import { loadEnvVars } from "./utils/loadEnvVars";
loadEnvVars(envPath);

// Import DB connection
import connectDB from "./utils/databaseConnection";

// Import Routes
import VehicleRoutes from "./routes/VehicleRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/UserUploads", express.static(path.join(__dirname, "UserUploads")));

// Route setup
app.use("/vehicle", VehicleRoutes);
app.use("/auth", AuthRoutes);

// Default root route
app.get("/", (req, res) => {
  res.send("server is running");
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
