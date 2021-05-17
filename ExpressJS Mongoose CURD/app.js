const express = require('express');

// database connection
require('./db');

//imports routes
var User = require('./routes/userRoutes');

const app = express();


//use middleware
app.use(express.json())
app.use('/',User)

app.listen(3000,()=>{
    console.log("server is working");
});


