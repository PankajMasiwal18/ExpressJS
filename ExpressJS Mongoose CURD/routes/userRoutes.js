const express = require('express');
const router = express.Router();

var { user_Model } = require('../models/user_Model');


router.get('/', async (req, res) => {
    try{
        const result = await user_Model.find();
        res.status(200).send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

router.get('/lookup', async (req, res) => {
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
})


router.get('/:id', async (req, res) => {
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
})


router.post('/', async (req, res) => {
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
})

router.put('/:id', async (req,res)=>{
  
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
})

router.delete('/:id', async (req,res)=>{
    try
    {
        await user_Model.findByIdAndDelete(req.params.id);
        res.status(200).send("Successfully Deleted");
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})


module.exports = router;
