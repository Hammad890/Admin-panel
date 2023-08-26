import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    phone: { type: String, require: true }
})

const User = model("user", userSchema)
export default User