var { location_Model } = require('../models/location_Model');


module.exports.getLocation = async (req, res) => {

    try {
        const result = await location_Model.find({
            location: { $near: { $geometry: { type: "Point", coordinates: [Number(req.query.long) , Number(req.query.lat)] }, $minDistance: 0, $maxDistance: 100000} }
            // minDistance and maxDistance take meter as argument
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err)
        
    }
}

module.exports.saveLocation = async (req, res) => {
  
    var locationData = new location_Model({
    location:  {
        type: 'Point', 
        coordinates: [req.body.long, req.body.lat]
    }
    })
    try {
        const result = await locationData.save();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message)
        console.log(err.message);
    }
}
