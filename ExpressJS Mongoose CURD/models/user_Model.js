const mongoose = require('mongoose');

//User Schema
var user_Model = mongoose.model('user_details', {
    Name: { type: String , required : true},
    City : {type : String , required : true},
    Age:{type:Number , required : true},
    user_id:{type:Number , required : true}
});

module.exports = { user_Model };