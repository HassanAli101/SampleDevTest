import mongoose from 'mongoose';
import { logger, ErrorLogger } from "./logger";

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        logger.info("Connected to MongoDB");
    } catch (err) {
        ErrorLogger.error("couldnt connect to mongoDB", new Error(err));
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;