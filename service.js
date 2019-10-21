//jshint esversion:6

const Contact = require('./db/contact.js');7

exports.fetchAll = function(cb){
    Contact.find(function(err, foundContacts){
        if(!err){
            cb(null, foundContacts);
        } else {
            cb(err);
        }
    });
};

exports.saveContact = function(name,phone,cb){
    const newContact = new Contact({
        name,
        phone
    });
    
    newContact.save(function(err){
        if(!err){
            cb(null);
        }else {
            cb(err);
        }
    });
};

exports.getThisContact = function(name,cb){
    Contact.findOne({name:name}, function(err, foundContact){
    if(!err){
        cb(null, foundContact);
    }else{
        cb(err);
    }
    });
};

exports.replaceContact = function({name,newName,newPhone, cb}){
    Contact.updateOne(
        {name: name},
        {name: newName, phone: newPhone},
        function(err){
            if(!err){
                cb(null);
            }else{
                cb(err);
            }
        });
};

exports.editContact = function(name,newData, cb){
    Contact.updateOne(
        {name: name},
        {$set: newData},
        function(err){
        if(!err){
            cb(null);
        }else{
            cb(err);
        }
    });
};

exports.deleteOneContact = function(name, cb){
    Contact.deleteOne(
        {name: name},
        function(err){
            if(!err){
                cb(null);
            }else{
                cb(err);
            }
        }
    );
};
