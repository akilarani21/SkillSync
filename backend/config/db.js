import mongoose from 'mongoose';

/**
 * Establishes a connection to MongoDB using the URI defined in .env
 * No authentication/user-session logic here — this is purely the
 * database connection layer (Phase 1 scope).
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;