const express = require('express');

//imports routes
var Axios = require('./routes/axiosRouter');

const app = express();

//use middleware
app.use(express.json())
app.use('/Axios',Axios)


app.listen(3000,()=>{
    console.log("server is working");
});
