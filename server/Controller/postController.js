const { Post } = require("../Model/Post")
const Register = require('../Model/Register');

const getEntirePosts = async(req, res, next)=>{
    try{
        const postData = await Post.find()
        res.status(200).json(postData);
    }
    catch(err){
        next(err)
    }
}

const getAllPostsOfUser = async(req, res, next)=>{
    try{
        const postData = await Post.find({userRef: req.params.user})
        res.status(200).json(postData);
    }
    catch(err){
        next(err)
    }
}

const createPost = async(req, res, next)=>{
    try{
        const postData = await Post.create(req.body)
        res.status(201).json(postData)
    }
    catch(err){
        next(err)
    }
}

const updatePost = async(req, res, next)=>{
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedPost)
    }
    catch(err){
        next(err)
    }
}

const deletePost = async(req, res, next)=>{
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPost)
    }
    catch(err){
        next(err)
    }
}

const getOnePost = async(req, res, next)=>{
    try{
        const post = await Post.findById(req.params.id);
        const registerData = await Register.findOne({userRef: post.userRef})
        res.status(200).json({...post._doc, comments: registerData.comments});
    }
    catch(err){
        next(err)
    }
}

const getAllPostsOfCategory = async(req, res, next)=>{
    let post=[];
    try{
        if(req.params.id === 'Drawing' || req.params.id === 'DigitalArt' || req.params.id === 'Craft'){
            post = await Post.find({category: req.params.id});
        }
        else{
            post = await Post.find({ tags: { $in: [req.params.id] } });
        }
        res.status(200).json(post);
    }
    catch(err){
        next(err)
    }
}

module.exports = {getEntirePosts, getAllPostsOfUser, getOnePost, createPost, updatePost, deletePost, getAllPostsOfCategory}