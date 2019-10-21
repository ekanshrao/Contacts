//jshint esversion:6
const express = require("express");
const tasks = require("../index.js");
const router = express.Router();

//get a list of all contacts from the db
router
.route("/contacts")
.get(tasks.getAll);

//add contacts to db
router
.route("/addcontacts")
.post(tasks.addContact);

//delete all contacts from the db
router
.route("/deletecontacts")
.delete(tasks.deleteAll);

//get a specific contact from the db
router
.route("/contacts/:contactName")
.get(tasks.getSpecificContact);

//update a specific contact in the db
router
.route("/updatecontacts/:contactName")
.put(tasks.updateContactOnPut);

router
.route("/updatecontacts/:contactName")
.patch(tasks.updateContactOnPatch);

//delete a specific contact from the db
router
.route("/deletecontacts/:contactName")
.delete(tasks.deleteSpecifcContact);

module.exports = router;