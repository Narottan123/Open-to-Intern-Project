const mongoose=require("mongoose");


const collegeSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please provide college name"],
        
    },
    fullName:{
        type:String,
        required:[true,"Please Provide College full name"],
        
    },
    logoLink:{
        type:String,
        required:[true,"Please provide college logo"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('college',collegeSchema);