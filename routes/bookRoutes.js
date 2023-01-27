let express = require("express");
let router = new express.Router();
let controller = require("../controllers/authController");
let bookcontroller = require("../controllers/bookcontroller")

router.post("/register", controller.register)

router.post("/login", controller.login);

// const express = require('express');
// const router = express.Router();

//POST ROUTE ONE TO CREATE A BOOK
router.post('/books',bookcontroller.createBook);


//GET route to retrieve a list of books
router.get('/books',bookcontroller.listBooks);


//**WILL DO LATER-TOO TIRED */
// // GET route to retrieve a specific book by ID
// router.get('/books/:id', (req, res) => {
//     res.json(book);
// });


//**WILL DO LATER-TOO TIRED */
// // PUT route to update a specific book by ID
// router.put('/books/:id', (req, res) => {
//     res.json({ message: 'Book updated successfully' });
// });



// POST route to add a comment to a book
router.post('/books/:id/comments',bookcontroller.createComment);



module.exports = router;

