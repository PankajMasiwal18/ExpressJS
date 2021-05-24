const mongoose = require('mongoose');

//Location Schema
var location_Model = mongoose.Schema( {
    location: {
        type: {type: String, default: 'Point'},
        coordinates: [Number]
    },
});


location_Model.index({location: '2dsphere'})

exports.location_Model = mongoose.model('locations', location_Model);