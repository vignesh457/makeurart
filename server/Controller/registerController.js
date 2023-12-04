const Register = require('../Model/Register');
const User = require('../Model/User');
const { customError } = require('../utils/customError');

const addToRegister = async(req, res, next)=>{
    try{
        const registerData = await Register.create({...req.body});
        res.status(201).json(registerData);
    }
    catch(err){
        next(err);
    }
}
const getAllFromRegister = async(req, res, next)=>{
    try{
        const registerData = await Register.find();
        res.status(200).json(registerData);
    }
    catch(err){
        next(err);
    }
}
const getOneRegister = async(req, res, next)=>{
    try{
        const registerData = await Register.findOne({userRef: req.params.id});
        if(!registerData){
            customError('404', 'User Not Found');
        }
        res.status(200).json(registerData);
    }
    catch(err){
        next(err);
    }
}

const updateRegister = async(req, res, next)=>{
    try{
        // if(req.userId!==req.params.id){
        //     customError('401',"You are not allowed to update");
        // }
        const user = await Register.findOne({userRef: req.params.id});
        if(!user){
            customError('404', 'User Not Found');
        }
        const updatedUser = await Register.findOneAndUpdate({userRef: req.params.id},req.body,{new: true})
        await User.findByIdAndUpdate(req.params.id,{avatar: updatedUser.profile.profilePic});
        res.status(200).json(updatedUser);
    }
    catch(err){
        next(err);
    }
}

module.exports = {addToRegister, getAllFromRegister, getOneRegister, updateRegister};