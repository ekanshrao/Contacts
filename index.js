//jshint esversion:6
const mongoose = require("mongoose");


const contactSchema = {
    name: String,
    phone: String
};

const Contact = mongoose.model("Contact", contactSchema);


exports.getAll = function(req, res){
    Contact.find(function(err, foundContacts){
        if(!err){
            res.send(foundContacts);
        } else {
            res.send(err);
        }
    });
};

exports.addContact = function(req, res){
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
};

exports.deleteAll = function(req, res){
    Contact.deleteMany(function(err){
        if(!err){
            res.send("Successfuly deleted all Contacts");
        }else{
            res.send(err);
        }
    });
};

exports.getSpecificContact = function(req, res){
    Contact.findOne({name: req.params.contactName}, function(err, foundContact){
    if (foundContact) {
        res.send(foundContact);
    } else {
        res.send("No contacts matching that name were found.");
    }
    });
};

exports.updateContactOnPut = function(req, res){    
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
};

exports.updateContactOnPatch = function(req, res){

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
};

exports.deleteSpecifcContact = function(req, res){
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
};
