const express = require('express');

require('./db');

//imports routes
var SignUp = require('./routes/signupRouter');

const app = express();

//use middleware
app.use(express.json())
app.use('/signup',SignUp)


app.listen(3000,()=>{
    console.log("server is working");
});
