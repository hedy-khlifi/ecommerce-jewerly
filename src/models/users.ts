import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: { type: String ,trim:true },
    email: { type: String, trim: true },
    age:{type:Number},
})
export const UserModel = mongoose.models.User || mongoose.model('User', usersSchema);
