//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(3000, function(){
    console.log("Server started on port 3000");
});