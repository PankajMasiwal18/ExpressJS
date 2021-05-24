const express = require('express');

// database connection
require('./db');


//imports routes
var Location = require('./routes/locationRouter');

const app = express();


//use middleware
app.use(express.json())
app.use('/Location',Location)


app.listen(3000,()=>{
    console.log("server is working");
});
