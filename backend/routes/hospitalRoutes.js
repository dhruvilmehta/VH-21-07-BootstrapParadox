const express =  require("express");
const router = express.Router();
const hospitalController = require("../controllers/hospitalController.js")

// router.post("/add-post",hospitalController.addPost)
// router.post("/add-post",hospitalController.addPost)
// router.post("/like",hospitalController.handleLike)
router.get("/get-hospitals",hospitalController.getHospitals)
router.get("/get-hospital/:id",hospitalController.getHospital)
router.patch("/update-hospital",hospitalController.updateData)



module.exports=router