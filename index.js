//jshint esversion:6

const app = require('./app.js');
require('./db/connection.js');


app.listen(3000, function(err){
    if(err){
        console.log(err);
        
    }else{
        console.log("Server started on port 3000");

    }
});