let express = require("express");
let router = new express.Router();
let controller = require("../controllers/authController");

router.post("/register", controller.register)

router.post("/login", controller.login);

// const express = require('express');
// const router = express.Router();

// GET route to retrieve a list of books
router.get('/books', (req, res) => {
    // Retrieve books from the database
    // Send the list of books as a response
    res.json(books);
});

// GET route to retrieve a specific book by ID
router.get('/books/:id', (req, res) => {
    // Retrieve the book from the database
    // ...
    // Send the book as a response
    res.json(book);
});

// PUT route to update a specific book by ID
router.put('/books/:id', (req, res) => {
    // Retrieve the updated book data from the request body
    // ...
    // Update the book in the database
    // ...
    // Send a success message as a response
    res.json({ message: 'Book updated successfully' });
});

// POST route to create a new book
router.post('/books', (req, res) => {
    // Retrieve the new book data from the request body
    // ...
    // Save the new book to the database
    // ...
    // Send a success message as a response
    res.json({ message: 'Book created successfully' });
});


module.exports = router;

