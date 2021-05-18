const mongoose = require('mongoose');

//User Schema
var emp_Model = mongoose.model('emp_details', {
    Department: { type: String , required : true},
    Post : {type : String , required : true},
    Emp_id: {type: Number , required : true}
});

module.exports = { emp_Model };