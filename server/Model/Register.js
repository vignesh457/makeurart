const mongoose = require('mongoose')
const {model, Schema} = mongoose;

const createrFormSchema = new Schema({
    username: String,
    email: String,
    joinDate: String,
    address: {
        city: String,
        state: String,
        country: String
    },
    communication: {
        phoneno: Number
    },
    socialmedia: {
        instagram: String, 
        twitter: String, 
        youtube: String, 
        facebook: String
    },
    profile: {
        profilePic: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        }, 
        bannerPic: {
            type: String,
            default: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=826&t=st=1700565228~exp=1700565828~hmac=e3f8ce2b29512027149189bf09664c8df1c9a37af66f3d1a5e1acce78c87811b"
        }, 
        bio: String
    },
    interests: {
        type: [String]
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments:{
        type: [{
            name:{
                type: String,
                required: true
            },
            dp:{
                type: String,
                required: true,
            },
            message:{
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                required: true
            },
            rating:{
                type: Number,
                required: true
            }
        }]
    }
})

const CreaterForm = model("register",createrFormSchema)

module.exports = CreaterForm;