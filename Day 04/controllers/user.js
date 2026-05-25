const User=require("../model/user");
const createAccount=async(req,res)=>{

  try{
    const {name,email,password}=req.body
  const userdata=await User.create({
    name,email,password

})
 res.json({
    message:"Account created successfully",
    userdata
 })
  }
  catch(e){
    res.send(e);
  }
}

const login=async(req,res)=>{
     try{
    const {email,password}=req.body;
    const userdata = await User.findOne({email});
    if(!userdata){
        throw new Error("user is not found");
     }
     if(userdata.password!==password){
        throw new Error("password is invalid");
     }
        res.json({
            message:"welcome to kle college",
            userdata
        })
        } catch(error){
            res.send(error.message);
        }
}
module.exports={createAccount,login}