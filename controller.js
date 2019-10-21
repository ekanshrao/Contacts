//jshint esversion:6
const service = require('./service.js');

exports.getAll = function(req, res){
    function cb(err, data){
        if(err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:data, message:"Contacts found"});
    }
    service.fetchAll(cb);
};

exports.addContact = function(req, res){
    function cb(err){
        if (err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:null, message:"Contact added!"});
    }
    let name = req.body.name;
    let phone = req.body.phone;
    if(!name||!phone){
        return res.json({status:false, data:null, message:"Enter valid name and phone"});
        
    }
    service.saveContact(name, phone, cb);
};

exports.deleteAll = function(req, res){
    Contact.deleteMany(function(err){
        if(!err){
            res.json({status:true, data:null, message:"Successfuly deleted all Contacts"});
        }else{
            res.json({status:false, data:null, message:"Error found!"});
        }
    });
};

exports.getSpecificContact = function(req, res){
    function cb(err, data){
        if(err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:data, message:"Contact found"});
    }
    let name = req.params.contactName;
    if(!name){
        return res.json({status:false, data:null, message:"name required"});  
    }
    service.getThisContact(name, cb);
};

exports.replaceSpecificContact = function(req, res){    
    function cb(err){
        if (err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:null, message:"Contact edited successfully!"});
    }
    let name = req.params.contactName;
    if(!name){
        return res.json({status:false, data:null, message:"name required"});  
    }
    let newName = req.body.name;
    let newPhone = req.body.phone;
    service.replaceContact({name,newName,newPhone,cb});
};

exports.editSpecificContact = function(req, res){
    function cb(err){
        if (err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:null, message:"Contact edited successfully!"});
    }
    let name = req.params.contactName;
    if(!name){
        return res.json({status:false, data:null, message:"name required"});  
    }
    let newName = req.body.name;
    let newPhone = req.body.phone;
    let data = {};
    if(newName) data.name = newName;
    if(newPhone) data.phone = newPhone;
    service.editContact(name,data,cb);
};


exports.deleteSpecificContact = function(req, res){
    function cb(err){
        if(err){
            return res.json({status:false, data:null, message:"Error found!"});
        }
        return res.json({status:true, data:null, message:"Contact deleted successfully!"});
    }
    let name = req.params.contactName;
    if(!name){
        return res.json({status:false, data:null, message:"name required"});  
    }
    service.deleteOneContact(name, cb);
};



