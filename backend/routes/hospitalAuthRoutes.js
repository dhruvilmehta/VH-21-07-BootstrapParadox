const express= require("express");
const hospitalAuthController =require("../controllers/hospitalAuthController.js")
const router=express.Router();
router.post("/hospital/signup",hospitalAuthController.signup)
router.post("/hospital/signin",hospitalAuthController.signin)
router.get("/hospital/logout",hospitalAuthController.logout)
// router.post("/hospital/verifyuser",hospitalAuthController.verifyUser)


module.exports=router;