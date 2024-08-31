
const {User} =require("../model/User")
exports.fetchUserById= async(req, res) => {
  console.log("req at fetchuser",req.user)
    const {id}=req.user
    console.log("at fetchuser",id)
    try {
      const user= await User.findById(id).exec()
      res.status(200).json(user)
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'An error occurred while fetching products.' });
    }
  };
  exports.createUser= async (req, res) => {
    const users= new User(req.body)
    try {
       const doc= await users.save()
       res.status(201).json(doc)
    } catch (err) {
      res.status(400).json(err);
    }
  }

  exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try{
      const user=await User.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json(user)
    }catch(err){
      res.status(400).json(err)
    }
  }