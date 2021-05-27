const bcrypt = require('bcryptjs');
const signUp_model = require('../models/signupModel');

module.exports.create_account = async (req, res) => {

    // Hash Password
    // const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,10);

    var userDetail = new signUp_model({
        email:req.body.email,
        password:hashPassword
    })
    try{
        const result = await userDetail.save();
        res.status(200).send(result);  
    }   
    catch(err)
    {
        if(err.code == 11000){
            res.status(400).json({message:"Email already exist ."})
        }
        else{
            res.status(500).send(err);
        }
    }
}

module.exports.update_account = async (req, res) => {

     // Hash Password
     const hashPassword = await bcrypt.hash(req.body.password,10);

    var userDetail = {  
        email:req.body.email,
        password:hashPassword
    }
    try
    {
        const updatedData = await signUp_model.findByIdAndUpdate({_id: req.params.id},{ $set: userDetail },{new:true});
        res.status(200).send(updatedData);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.delete_account = async (req, res) => {
    try
    {
        await signUp_model.findByIdAndDelete(req.params.id);
        res.status(200).send("Successfully Deleted");
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}

