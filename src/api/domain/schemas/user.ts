import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({

    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        min: [10, 'phone number must be 10 digit']
    },
    password: {
        type: String
    },
    authToken: {
        type: String
    },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, required: false, default: null },


}, { versionKey: false })

const User = model('user', userSchema, 'user')
export { userSchema }
export default User