import mongoose from "mongoose";
import { config } from "dotenv";
config();

/**
 * Welcome to mongoose connector! This is just a helper file to connect to MongoDB database, so don't change anything!
 */

export const connectToDb = async () => {
  const db = await mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) console.error(error);
    }
  );
  console.log(`Successful connection to MongoDB.`);
  return db;
};

export const disconnectFromDb = async () => {
  await mongoose.connection.close();
};
