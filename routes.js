//jshint esversion:6
const express = require("express");
const controller = require("./controller.js");
const router = express.Router();

//get a list of all contacts from the db
router.get("/contacts",controller.getAll);

// add contacts to db
router.post("/addcontacts",controller.addContact);

//delete all contacts from the db
router.delete("/deleteContacts",controller.deleteAll);

//get a specific contact from the db
router.get("/contacts/:contactName", controller.getSpecificContact);

//update a specific contact in the db
router.put("/updatecontacts/:contactName", controller.replaceSpecificContact);

router.patch("/updatecontacts/:contactName", controller.editSpecificContact);

// //delete a specific contact from the db
router.delete("/deletecontacts/:contactName", controller.deleteSpecificContact);

module.exports = router;