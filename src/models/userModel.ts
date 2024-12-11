import mongoose, { Document, Schema } from "mongoose";

export interface Iuser extends Document{
    email:String;
    password:string;
    firstName:string;
    lastName:string;
}
const userSchema:Schema=new Schema<Iuser>({
    email:{type:String, required:true},
    password:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true}
})
export const userModule=mongoose.model<Iuser>('User',userSchema);
export default userSchema;