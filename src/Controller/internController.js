const internModel=require("../Model/internModel");

const internCreate=async(req,res)=>{
    let data=req.body;
    let internData=await internModel.create(data);
    res.status(201).send({status:false,message:"intern created successfully",internDataata})
}
module.exports.internCreate=internCreate;