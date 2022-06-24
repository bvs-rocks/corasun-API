const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
// var multer = require('multer');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallcontents', async (req, res) => {
    try {
        const notes = await Note.find({ }); // we fetch all req.user notes from the database 
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addcontent', [
body('name', 'Enter a valid title').isLength({ min: 3 }),
body('content', 'Description must be atleast 5 characters').isLength({ min: 10 }),], async (req, res) => {
    try {
        const { name, content, url, size, type } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            name, content, url, size, type
        })
        const savedNote = await note.save()

        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router;