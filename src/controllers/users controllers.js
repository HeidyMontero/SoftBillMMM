const usersCtrl ={};
const User=require('../models/Users');


usersCtrl.getUsers= async (req,res)=>{
 const users=  await User.find();
 res.json(users);

}

usersCtrl.postUser= async(req,res)=> {
    const {rol,userE,name}= req.body;
    const newUser = new User({

        rol:rol,
        userE:userE,
        name:name

    });
    await newUser.save();
    res.json({message:'User saved'})
 
};


//Metodos con ID
usersCtrl.getUser= async(req,res)=>{ 
    const user = await User.findById(req.params.id);
    res.json(user);
}

usersCtrl.deleteUser= async (req,res)=>{ 
    await User.findByIdAndDelete(req.params.id);
    res.json({message:'Deleted Users'})
}

usersCtrl.putUser= async (req,res)=> {
    const {rol,userE,name}= req.body;
    await User.findByIdAndUpdate(req.params.id,{
        rol:rol,
        user:userE,
        name:name

    });
    res.json({message:'Users Updated'})
}

module.exports=usersCtrl;
