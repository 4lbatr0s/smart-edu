const express = require('express')
const ejs  = require('ejs')
const app = express();

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.get('/', (req, res) => {
  res.status(200).render('index', {
      page_name: "index" //we've sent this page name information into index.ejs file.
  });
});

app.get('/about', (req,res)=> {
  res.status(200).render('index', {
    page_name:"about"
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`)});