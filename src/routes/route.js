const express=require("express");
const router=express.Router();
const collegeController=require("../Controller/collegeController")
const internController=require("../Controller/internController")
const collegemiddleware=require("../middleware/collegeMiddleware")
const internmiddleware=require("../middleware/internMiddleware")
router.post("/functionup/colleges",collegemiddleware.collegemodelcheck,collegeController.createCollege)
router.post("/functionup/interns",internmiddleware.internmodelcheck,internController.internCreate);
router.get("/functionup/collegeDetails/:collegeName",collegeController.getCollegeDEtails);
module.exports=router