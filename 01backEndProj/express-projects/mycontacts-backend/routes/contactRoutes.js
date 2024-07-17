const express = require("express")
const router =  express.Router();
const {getContacts, createnewContact, updateContact, getContact, deleteContact} = require('../controllers/contactController');
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // applicable to all the routes below
router.route('/').get(getContacts).post(createnewContact)
router.route('/:id').get(getContact).delete(deleteContact).put(updateContact)
module.exports = router;