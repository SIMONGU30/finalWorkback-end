import mongoose from "mongoose";
const Schema = mongoose.Schema
const User = new Schema({

    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    reservword: {
        type: String,
        required: true
    }
})

export const modeluser = mongoose.model('users', User)