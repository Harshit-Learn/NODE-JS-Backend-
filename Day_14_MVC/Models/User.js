import mongoose from "mongoose";

//make Schema for the form ( Row , Column) || MongoDB has 3 type only:  String , Number , Boolean

const userSchema = new mongoose.Schema({
  name: { type: String , required:true },
  email: { type: String , required:true },
  password: { type: String , required:true },
  age: { type: Number },
  phone: { type: Number },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

export const User =  mongoose.model('user' , userSchema );
