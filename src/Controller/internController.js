const internModel=require("../Model/internModel");

const internCreate=async(req,res)=>{
    let data=req.body;
    let internData=await internModel.create(data);
    res.status(201).send({status:true,message:"intern created successfully",internData})
}
module.exports.internCreate=internCreate;