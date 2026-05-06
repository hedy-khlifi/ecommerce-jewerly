import mongoose from "mongoose";

const dburl = process.env.DB_URL!;
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
export const connectDb = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(dburl);
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
