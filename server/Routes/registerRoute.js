const express = require('express')
const verifyUser = require('../middleware/auth')
const router = express.Router();
const {addToRegister, getAllFromRegister, getOneRegister, updateRegister} = require('../Controller/registerController')

router
.post('/', verifyUser, addToRegister)
.put('/:id', verifyUser, updateRegister)
.get('/',getAllFromRegister)
.get('/:id', getOneRegister)

module.exports = router;