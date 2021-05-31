const express = require('express');

const app = express();

//imports routes
const nodeMailer = require('./routers/nodeMailerRouter');

//use middleware
app.use(express.json())
app.use('/nodeMailer', nodeMailer)


app.listen(3000, () => {
    console.log("Server is working");
})