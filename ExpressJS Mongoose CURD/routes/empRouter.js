const express = require('express');
const router = express.Router();

var { emp_Model } = require('../models/emp_Model');

router.get('/', (req, res) => {
    emp_Model.aggregate([
        { 
            $lookup: 
            { 
                from: "user_details",
                localField: "Emp_id",  //primary key of emp_detail
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


router.post('/', async (req, res) => {
    var empData = new emp_Model({
        Department: req.body.dpt,
        Post: req.body.post,
        Emp_id: req.body.id
    })
    try
    {
        const result = await empData.save();
        res.status(200).send(result);
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

module.exports = router;
