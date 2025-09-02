import {User} from '../Models/User.js'

export const userRegister = async (req , res)=>{
  
try{
  let user = await User.create(req.body) // User is model & connect 
  res.json({
  message: "User Created successfully..",
  Newuser:user,
  Success: true,
});
  }catch(error){
  res.json({message:error.message})
  }


}