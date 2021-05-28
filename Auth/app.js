const express = require('express');

require('./config/db');

//imports routes
var SignUp = require('./routes/signupRouter');
var Login = require('./routes/loginRouter');
var Any = require('./routes/anyRouter');


const app = express();

//use middleware
app.use(express.json())
app.use('/signup',SignUp)
app.use('/login',Login)
app.use('/any',Any)



app.listen(3000,()=>{
    console.log("server is working");
});
