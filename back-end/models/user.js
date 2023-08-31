import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    number: { type: String, require: true },
})

const User = model("user", userSchema)
export default User