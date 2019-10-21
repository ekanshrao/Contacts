//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/api');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/contactDB", {
    useNewUrlParser:true,
    useUnifiedTopology: true
});



const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

