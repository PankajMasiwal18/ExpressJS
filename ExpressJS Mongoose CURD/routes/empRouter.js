const express = require('express');
const router = express.Router();

var { emp_Model } = require('../models/emp_Model');
var { user_Model } = require('../models/emp_Model');


router.get('/', (req, res) => {
    emp_Model.aggregate([
        { 
            $lookup: 
            { 
                from: "user_details",
                localField: "Emp_id",
                foreignField: "user_id",
                as: "user_emp"
            } 
        }
     ])
    .then(data => {
        res.status(200).json({x:data})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })

    // emp_Model.aggregate([{$lookup : {
    //     from : 'user_details',
    //     localField : 'Emp_id',
    //     foreignField : 'user_id',
    //     as : "userData"
    // }}])
    //     .exec((err, result)=>{
    //         if (err) {
    //             console.log("error" ,err)
    //             res.json({x:err})
    //         }
    //         if (result) {
    //             console.log(result);
    //             res.json({x:result})
    //         }
    //   });
})


router.post('/', (req, res) => {
    var empData = new emp_Model({
        Department: req.body.dpt,
        Post: req.body.post,
        Emp_id: req.body.id
    })
    empData.save()
        .then(result => {
            return res.json({ message: "success" });
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})



module.exports = router;
