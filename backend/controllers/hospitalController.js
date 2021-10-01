const Hospital = require("../models/Hospital")

module.exports.getHospitals=async(req,res)=>{

    const hospitals = await Hospital.find()
    res.status(200).send(hospitals)

}

module.exports.updateData=async(req,res)=>{

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