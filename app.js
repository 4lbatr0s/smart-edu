const express = require('express')
const ejs  = require('ejs')
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')

//create server.
const app = express();

//connect database
const uri = 'mongodb://localhost/smartedu-db'
mongoose.connect(uri, {
  useUnifiedTopology:true
}).then(()=> {   //mongoose connect returns a promise.
  console.log('DB connected successfully')
}).catch((err)=> {
  console.log(err)
}) 

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json()) //required for sending json post requests.
app.use(express.urlencoded({extended:true}))
//Routes
app.use('/', pageRoute); //page route changes.by request, when we use a route module, we use 'use' instead of 'get'. 
app.use('/courses',courseRoute)
const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`)});