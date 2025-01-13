import mongoose from 'mongoose';
import { logger, ErrorLogger } from "./logger";

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info("Connected to MongoDB");
    } catch (err) {
        ErrorLogger.error("couldnt connect to mongoDB", new Error(err));
        process.exit(1);
    }
};

export default connectDB;