//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/contactDB", {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const contactSchema = {
    name: String,
    phone: String
};

const Contact = mongoose.model("Contact", contactSchema);

////////////////////Requests targeting all Contacts////////////////////

app.route("/contacts")

.get(function(req, res){
    Contact.find(function(err, foundContacts){
        if(!err){
            res.send(foundContacts);
        } else {
            res.send(err);
        }
    });
})

.post(function(req, res){
    const newContact = new Contact({
        name: req.body.name,
        phone: req.body.phone
    });
    
    newContact.save(function(err){
        if(!err){
            res.send("Successfully added a new Contact.");
        }else {
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Contact.deleteMany(function(err){
        if(!err){
            res.send("Successfuly deleted all Contacts");
        }else{
            res.send(err);
        }
    });
});

////////////////////Requests targeting specified Contacts////////////////////

app.route("/contacts/:contactName")

.get(function(req, res){

    Contact.findOne({name: req.params.contactName}, function(err, foundContact){
    if (foundContact) {
        res.send(foundContact);
    } else {
        res.send("No contacts matching that name were found.");
    }
    });
})

.put(function(req, res){
    
    Contact.updateOne(
        {name: req.params.contactName},
        {name: req.body.name, phone: req.body.phone},
        function(err){
            if(!err){
                res.send("Successfully updated the selected contact.");
            }else {
                res.send(err);
            }
        });
})

.patch(function(req, res){

    Contact.updateOne(
        {name: req.params.contactName},
        {$set: req.body},
        function(err){
        if(!err){
            res.send("Successfully updated Contact.");
        } else {
            res.send(err);
        }
        }
    );
})

.delete(function(req, res){
    Contact.deleteOne(
        {name: req.params.contactName},
        function(err){
            if(!err){
                res.send("Successfully deleted Contact.");
            }else{
                res.send(err);
            }
        }
    );
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});