var { emp_Model } = require('../models/emp_Model');

module.exports.lookup = async (req, res) => {
    try
    {
        const result = await emp_Model.aggregate([
            { 
                $lookup: 
                { 
                    from: "user_details",
                    localField: "Emp_id",  //primary key of emp_detail
                    foreignField: "user_id", 
                    as: "user_emp"
                } 
            }
         ]);
         res.status(200).send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
    

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
}


module.exports.all_Emp_Detail = async (req, res) => {
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
}
