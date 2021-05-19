var { user_Model } = require('../models/user_Model');

module.exports.all_User_Detail = async (req, res) => {
    try{
        const result = await user_Model.find();
        res.status(200).send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}


module.exports.user_Id_Detail =async (req, res) => {
    var id = req.params.id;

    try
    {
        const  result = await user_Model.findById(id);
        res.status(200).send(result);
    }
    catch(err) 
    {
        res.status(500).send(err)
    }
}


module.exports.add_User_Detail = async (req, res) => {
    var userData = new user_Model({
        Name: req.body.name,
        City: req.body.city,
        Age: req.body.age,
        user_id: req.body.user_id,
    })
    try
    {
        const user = await userData.save();
        res.status(201).json({ message: "success" });
    }
    catch(err)
    {
        res.status(500).json({ err })
    }
}



module.exports.update_User_Detail = async (req,res)=>{
  
    var userData = {
        Name: req.body.name,
        City: req.body.city,
        Age: req.body.age,
        user_id: req.body.user_id
    }
    try
    {
        const updatedData = await user_Model.findByIdAndUpdate({_id: req.params.id},{ $set: userData },{new:true});
        res.status(200).send(updatedData);
    }
    catch(err){
        res.status(500).send(err)
    }
}


module.exports.delete_User_Detail = async (req,res)=>{
    try
    {
        await user_Model.findByIdAndDelete(req.params.id);
        res.status(200).send("Successfully Deleted");
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}



module.exports.lookup =async (req, res) => {
    try
    {
        await user_Model.aggregate([
            { 
                $lookup: 
                { 
                    from: "emp_details",
                    localField: "user_id",  
                    foreignField: "Emp_id", 
                    as: "user_emp"
                } 
            }
         ])
    }
    catch(err)
    {
        res.status(500).json({ error: err })
    }
}