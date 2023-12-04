const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('./dbConfig')
require("dotenv").config();
const authRoute = require('./Routes/authRoute')
const registerRoute = require('./Routes/registerRoute')
const postRoute = require('./Routes/postRoute')

const PORT = process.env.PORT;

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute);
app.use('/api/register',registerRoute);
app.use('/api/post',postRoute)

//error middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(8000,()=>{
    console.log("server running at port: "+PORT);
})