const { default: mongoose } = require('mongoose');
const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler'); // saves us from writing // custom error handling, automatically handles error 

// why async ? because it takes some time to retrieve data from DB
// @desc - get all contacts
// @route - GET /api/contacts
// @access - private (will change to private later)
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(contacts)
});


// @desc -  create newContact
// @route - post /api/contacts
// @access - private (will change to private later)
const createnewContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw Error("All fields are required");
    }
    const contact = await Contact.create({ name, email, phone, user_id : req.user.id });
    res.status(201).json(contact);
})

// @desc - get contact
// @route - GET /api/contacts/:id
// @access - private (will change to private later)
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact === null) {
        res.status(404);
        throw Error("Contact not found")
    }
    res.status(200).json(contact);
})


// @desc -  Update existing contact
// @route - put /api/contacts/:id
// @access - private (will change to private later)
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact === null) {
        res.status(404);
        throw Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw Error("User don't have permission to update other's contact");
    }
    const updated = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(201).json(updated)
})

// @desc -  delete existing contact
// @route - DELETE /api/contacts/:id
// @access - private (will change to private later)
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(contact === null)
    {
        res.status(404);
        throw Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw Error("User don't have permission to delete other's contact");
    }
    const deleted = await Contact.deleteOne(contact);
    res.status(200).json(deleted);
})

module.exports = { getContacts, createnewContact, getContact, updateContact, deleteContact };