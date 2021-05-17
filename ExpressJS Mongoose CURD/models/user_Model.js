const mongoose = require('mongoose');

//User Schema
var user_Model = mongoose.model('user_detail', {
    Name: { type: String , required : true},
    City : {type : String , required : true},
    Age:{type:Number , required : true}
});

module.exports = { user_Model };