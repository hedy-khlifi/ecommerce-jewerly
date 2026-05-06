import mongoose from "mongoose";

const dburl = process.env.DB_URL!;

const globalForMongoose = globalThis as unknown as {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null };
}

export const connectDb = async () => {
  const cached = globalForMongoose.mongoose;

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(dburl);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};