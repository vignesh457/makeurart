const { customError } = require("../utils/customError");
const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyUser = (req, res, next) => {
    try{
        const cookie = req.cookies?.access_token;
        if(!cookie){
            customError('401',"Unauthorized")
        }
        const {id} = jwt.verify(cookie, process.env.JWT_SECRET)
        req.userId = id;
        next();
    }
    catch(err){
        next(err)
    }
};

module.exports = verifyUser;