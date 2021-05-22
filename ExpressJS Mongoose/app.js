const express = require('express');

// database connection
require('./db');


//imports routes
var User = require('./routes/userRoutes');
var Emp = require('./routes/empRouter');

const app = express();


//use middleware
app.use(express.json())
app.use('/User',User)
app.use('/Emp',Emp)


app.listen(3000,()=>{
    console.log("server is working");
});
