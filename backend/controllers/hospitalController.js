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
    
       users.push(a)
       if(index===appointments.length-1){
        
   
        res.status(200).send(users)
       }
   })
  
  
}


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')






module.exports.approveAppointment=async(req,res)=>{
    console.log(req.body)
    let hospital_id=req.params.id
    let user_id=req.body.user_id
    let hospital_name=req.body.hospital_name
    let user_name=req.body.user_name
    let user_email=req.body.user_email
    const msg = {
        to: user_email, // Change to your recipient
        from: 'tusharpop638@gmail.com', // Change to your verified sender
        subject: 'Bed Booking Approved',
        text: `Your booking request has been approved by the ${hospital_name}`,
        html: `<strong>${user_name} Your Bed booking request has been approved by the ${hospital_name}</strong>`,
      }
    
    
    sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })

  Hospital.updateOne({_id:hospital_id},
    { $pullAll:{ appointment:[user_id] } },
    function(err, result) {
        if (err) {
         console.log(err)
        } else {
          console.log(result)
        }
      }
)


  res.status(200).send({message:"ok"})

}