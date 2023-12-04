const mongoose = require('mongoose')
const {model, Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
    },
    usertype:{
        type: String,
        required: true,
        default: 'none'
    },
    timestamp:{
        type: String,
        default: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    } 
})

const User = model("users",userSchema)

module.exports = User;