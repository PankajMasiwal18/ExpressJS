const express = require('express');
const router = express.Router();

var { user_Model } = require('../models/user_Model');


router.get('/', (req, res) => {
    user_Model.find()
        .then(data => {
            res.status(200).json({ x: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
})

router.get('/:id', (req, res) => {
    var id = req.params.id;

    user_Model.findById(id)
        .then(data => {
            res.status(200).json({ x: data })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
})


router.post('/', (req, res) => {
    var userData = new user_Model({
        Name: req.body.name,
        City: req.body.city,
        Age: req.body.age
    })
    userData.save()
        .then(result => {
            return res.json({ message: "success" });
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.put('/:id',(req,res)=>{
    var id = req.params.id;

    var userData = {
        Name: req.body.name,
        City: req.body.city,
        Age: req.body.age
    }

    user_Model.findByIdAndUpdate({_id: req.params.id},{ $set: userData })
    .then(result=>{
        res.status(200).json({status:"Successfully Updated"})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.delete('/:id',(req,res)=>{
    var id = req.params.id;

    user_Model.findByIdAndDelete(id)
    .then(result=>{
        res.status(200).json({status:"Successfully Deleted"})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})


module.exports = router;
