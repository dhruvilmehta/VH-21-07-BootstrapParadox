const express =  require("express");
const router = express.Router();
const hospitalController = require("../controllers/hospitalController.js")

router.post("/book-appointment/:id",hospitalController.bookAppointment)
router.get("/get-appointments/:id",hospitalController.getAppointments)

router.get("/get-hospitals",hospitalController.getHospitals)
router.get("/get-hospital/:id",hospitalController.getHospital)
router.patch("/update-hospital",hospitalController.updateData)



module.exports=router