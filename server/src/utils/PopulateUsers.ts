// This single file populates the required users into database.
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import UserModel from "../models/UserModel";
import { loadEnvVars } from "./loadEnvVars";
import connectDB from "./databaseConnection";
import { users, envPath } from "./constants";

// Load environment variables
loadEnvVars(envPath);

// Connect to MongoDB and populate users
const populateUsers = async () => {
  try {
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = new UserModel({
        username: user.username,
        password: hashedPassword,
      });
      await newUser.save();
      console.log(`User ${user.username} populated successfully.`);
    }
    console.log("All users have been populated.");
  } catch (error) {
    console.error("Error populating users:", error.message || error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Main execution
connectDB().then(populateUsers);

