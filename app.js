const express= require('express')
const app=express()
const port=5000
const ejs = require("ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static(__dirname + 'public/css'));
app.use(express.static(__dirname + 'public/img'));
app.use(express.static(__dirname + 'public/js'));

app.set('views','./src/views');
app.set('view engine', 'ejs');

const newsRouter = require('./src/routes/news')

app.use('/',newsRouter);
app.listen(port,()=>console.log(`running on port ${port}`))