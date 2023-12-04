const User = require("../Model/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { customError } = require("../utils/customError");
require('dotenv').config();


const handleSignup = async(req, res, next)=>{
    try{
        const {username, email, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const userData = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        const {password: pass, ...rest} = userData._doc;
        const jwtToken = jwt.sign({ id: userData._id}, process.env.JWT_SECRET);
        res.cookie("access_token", jwtToken,{httpOnly: true, maxAge: 1000*60*60*24*30}).status(201).json(rest);
    }
    catch(err){
        if(err.code === 11000){
            err.message = "Account already exists. Please log in.";
        }
        next(err);
    }
}

const handleLogin = async(req, res, next)=>{
    try{
        const {email, password} = req.body;
        const userData = await User.findOne({email});
        if(!userData){
            customError(404, "Email not found. Please double-check it.");
        }
        const isMatch = bcrypt.compareSync(password, userData.password);
        if(!isMatch){
            customError(401, "Wrong password");
        }
        const {password: pass, ...rest} = userData._doc;
        const jwtToken = jwt.sign({ id: userData._id}, process.env.JWT_SECRET);
        res.cookie("access_token", jwtToken,{httpOnly: true, maxAge: 1000*60*60*24*30}).status(200).json(rest);
    }
    catch(err){
        next(err);
    }
}

const handleGoogle = async(req, res, next)=>{
    const {username, email, password, avatar} = req.body;
    try{
        const user = await User.findOne({email})
        if(user){
            //existing entry
            const {password: pass,...rest} = user._doc;
            const jwtToken = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
            res.cookie("access_token", jwtToken,{httpOnly: true, maxAge: 1000*60*60*24*30}).status(200).json(rest);
        }
        else{
            //new entry
            const hashedPassword = bcrypt.hashSync(password, 10);
            const userData = await User.create({
                username,
                email,
                password:hashedPassword,
                avatar
            })
            const {password: pass,...rest} = userData._doc;
            const jwtToken = jwt.sign({ id: userData._id}, process.env.JWT_SECRET);
            res.cookie("access_token", jwtToken,{httpOnly: true, maxAge: 1000*60*60*24*30}).status(201).json(rest);
        }
    }
    catch(err){
        next(err);
    }
}

const handleLogout = async(req, res, next)=>{
    try{
        res.clearCookie("access_token");
        res.status(200).json("user logged out successfully");
    }
    catch(err){
        next(err);
    }
}

const handleUpdateUser = async(req, res, next)=>{
    try{
        if(req.userId!==req.params.id){
            customError('401',"You are not allowed to update");
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.status(200).json(updatedUser);
    }
    catch(err){
        next(err);
    }
}

const handleAllUsers = async(req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }
}

module.exports={handleSignup, handleLogin, handleGoogle, handleLogout, handleUpdateUser, handleAllUsers}