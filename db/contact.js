//jshint esversion:6

const mongoose = require("mongoose");


const contactSchema = {
    name: String,
    phone: String
};
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;