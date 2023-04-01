const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//mongoDB connection string
const url = process.env.DB_URL;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
  console.log('database connected!');})
.catch(err => console.log(err));