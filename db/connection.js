//jshint esversion:6
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/contactDB", {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => console.error(err));
