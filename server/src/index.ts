//this is the main index.ts file which combines all the work.
import express from "express";
import cors from "cors";
import { envPath } from "./utils/constants";

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
    origin: "*", // or the vercel link.
    credentials: true,
  })
);
app.use(express.json());

// Route setup
app.use("/vehicle", VehicleRoutes);
app.use("/auth", AuthRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
