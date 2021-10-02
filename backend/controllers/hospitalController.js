const Hospital = require("../models/Hospital")
const User = require("../models/User")
module.exports.getHospitals=async(req,res)=>{

    const hospitals = await Hospital.find()
    res.status(200).send(hospitals)

}

module.exports.updateData=async(req,res)=>{
    console.log(req.body)
    const hospital =await Hospital.findByIdAndUpdate(req.body.hospital_id,{
        beds:req.body.beds,
        icu_beds:req.body.icu_beds,
        ambulance:req.body.ambulance,
        oxygen_cylinders:req.body.oxygen_cylinders
    },{new: true, useFindAndModify: false}, (err,docs)=>{
        if (err){
            console.log(err)
        }
        console.log(docs)
    })
    
    return res.status(200).send(hospital)
}

module.exports.getHospital=async(req,res)=>{
    let id=req.params.id
    const hospital = await Hospital.findById(id)
    console.log(hospital)
    res.status(200).send(hospital)
}

module.exports.bookAppointment=async(req,res)=>{
    let user_id=req.body.user_id
    let hospital_id=req.params.id
    Hospital.updateOne({_id:hospital_id},{ $push: { appointment:[user_id] } },function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send({message:"added successfully"});
        }
      }
    );



}

module.exports.getAppointments=async(req,res)=>{
    let hospital_id=req.params.id
   const hospital=await Hospital.findById(hospital_id)
   const appointments = hospital.appointment
    let users=[]
   appointments.map(async(app,index)=>{
       let a= await User.findById(app)
       console.log(a)
       users.push(a)
       if(index===appointments.length-1){
        console.log(users)
   
        res.status(200).send(users)
       }
   })
  
  
}
