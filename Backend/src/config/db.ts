import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';
let mongoServer: MongoMemoryServer;

dotenv.config();

export const connect = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'test') {
    // For testing, use in-memory MongoDB
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, {});
  } else {
    // For development/production, use real MongoDB
    const mongoUri = process.env.MONGODB_URI as string;
    await mongoose.connect(mongoUri, {});
    console.log('MongoDB connected');
  }
};

export const close = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) { // Check if a connection exists
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  }
};


export default { connect, close };