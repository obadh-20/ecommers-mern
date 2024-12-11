import express from "express"
import mongoose from "mongoose";
import userRouters from "./routers/userRouters"
const app=express();
app.use(express.json());
app.use('/users',userRouters);
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("conntected")
}).catch((err)=>{
    console.log("ecrror happeend");
});
app.get("/",(req,res)=>{

    console.log("something");    
})
const port =3000;
app.listen(port,()=>{
    console.log("server is running ")
})