const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.ATLAS_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("DB connection successfull"));