const mongoose = require('mongoose');
require('mongoose-double')(mongoose)
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'The password should be at least 6 characters long']
    },
    city:{
        type:String,
   },state:{
       type:String,

   },pincode:{
        type:Number
   },lat:{
       type:Number
   },long:{
       type:Number
   },beds:{
       type:Number,
       default:0
   },icu_beds:{
    type:Number,
    default:0
   },oxygen_cylinders:{
    type:Number,
    default:0
   },ambulance:{
       type:Number,
       default:0
   },distance:{
       type:Number,
       default:0
   },
   phone:{
       type:Number,
   },
   address:{
       type:String
   },
   appointment:{
       type:Array
   },
   approved:{
       type:Array
   }
    

})
hospitalSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next()
})
hospitalSchema.statics.login = async function (email, password) {
  
    const hospital = await this.findOne({ email });

   
    if (hospital) {
        
        const isAuthenticated = await bcrypt.compare(password, hospital.password);
        if (isAuthenticated) {
            return hospital;
        }
        throw Error('incorrect pwd');
    }
    throw Error('incorrect email');

}

const Hospital = mongoose.model('hospital', hospitalSchema);
module.exports = Hospital;