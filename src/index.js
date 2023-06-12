const express=require("express")
const bodyParser=require("body-parser")
const route=require("./routes/route")
const mongoose=require("mongoose");
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect("mongodb+srv://Narottam2000:Sarkar2000@cluster0.bciguah.mongodb.net/Intern_Project",{
useNewUrlParser: true 
}).then(()=> {
    console.log("MongoDB is Connected");

}).catch((err) => {
console.log(err);
})

app.use("/",route);


app.listen(3000,()=>{
    console.log("port 3000")
})