const express=require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');


const mongodb="mongodb+srv://dhruvil_mehta:1234567890@cluster0.bwxbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app=express() //creating an express application

let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})}) //connecting to the database

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const authRoutes= require("./routes/authRoutes.js")

app.use(authRoutes);

app.get("/",(req,res)=>{
    res.send("home")
})