const express= require("express");
const authController =require("../controllers/authController.js")
const router=express.Router();
router.post("/signup",authController.signup)
router.post("/signin",authController.signin)
router.get("/logout",authController.logout)
router.post("/verifyuser",authController.verifyUser)
router.patch("/updateuser",authController.updateUser)
// router.post("/signin",authController.login)
// router.post("/signup",authController.signup)
// router.get('/logout',authController.logout)
// router.post('/verifyuser',authController.verifyUser)

module.exports=router;