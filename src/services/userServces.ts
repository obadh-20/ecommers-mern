import { Iuser, userModule } from "../models/userModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register=async({email,password,firstName,lastName}:Iuser)=>{
        const find=await userModule.findOne({email});
        if(find){
            return {data:"user found",statusCode:404};
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser=new userModule({email,password:hashedPassword,firstName,lastName});
        await newUser.save();
        return {data:generatkey({email,firstName,lastName}),statusCode:200};
    }
export const login=async({email,password}:Iuser)=>{
        const find=await userModule.findOne({email});
        if(!find){
            return {data:"user not found",statusCode:404};
        }
        const flag= await bcrypt.compare(password,find.password);

        if(flag){
           
            return {data:generatkey({email,firstName:find.firstName,lastName:find.lastName}),statusCode:200};
        }
        return {data:"wrong email or password",statusCode:401};
        
    }
    const generatkey=(data:any)=>{
        return jwt.sign(data,"0776384168");
    }