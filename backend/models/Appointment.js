const mongoose = require("mongoose")
const Schema = mongoose.Schema

const appointmentSchema=new Schema({

 
    hospital_id:{type:String,required:true},
    user_id:{type:String,required:true},
    

},{timestamps:true})

const Appointment = mongoose.model('post',appointmentSchema)
module.exports=Appointment;