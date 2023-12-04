const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const postSchema = new Schema({
    postPic: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    artBy: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    tags: {
        type: [String], 
        required: true
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true});

const Post = model('Post',postSchema);

module.exports = {Post};