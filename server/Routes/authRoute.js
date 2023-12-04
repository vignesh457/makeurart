const express = require('express')
const verifyUser = require('../middleware/auth')
const {handleSignup, handleLogin, handleGoogle, handleLogout, handleUpdateUser, handleAllUsers} = require('../Controller/authController')

const router = express.Router();

router
.post("/signup",handleSignup)
.post("/login",handleLogin)
.post("/google",handleGoogle)
.get('/logout',handleLogout)
.put("/:id", verifyUser, handleUpdateUser)
.get("/", handleAllUsers)


module.exports=router;