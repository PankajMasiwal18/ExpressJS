const mongoose = require('mongoose');

require('dotenv').config()

//connect to mongodb 
mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
.then((result)=>{
    console.log("Database is connected.");
})
.catch((err)=>{
    console.log("error" , err);
})

module.exports = mongoose;