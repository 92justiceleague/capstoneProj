let jwt = require("jsonwebtoken");
let JWT_SECRET = process.env.jwt_SECRET;

let checkJWT = function(req, res, nex){

    let header = req.get("Authorization");
    let signedToken;
    if(header){
        let pars = header.splits ("");
        signedToken = parts[1];
        
    }

    if (signedToken){
        console.error("No signed token to check");
        res.sendStatus(403);
        return;
    }

    try{
        let token = jwt.verify(signedToken, JWT_secret);
        req["_token"] = token;
        next();
    } catch(err){
        console.error("Could not verify the token", err);
        res.sendStatus(403);
        return;
    }
}


// THIS WOULD BE TO MAKE COMMENTS PUBLIC TO USERS AND PRIVATE TO NONUSERS. 

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// router.post('/books/:id/comments', (req, res) => {
//     // Retrieve the book id from the request parameters
//     const bookId = req.params.id;

//     // Retrieve the comment data and the JWT from the request
//     const comment = req.body;
//     const token = req.headers.authorization;

//     // Verify the JWT
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             // If the JWT is invalid, return an error
//             res.status(401).json({ message: 'Unauthorized' });
//         } else {
//             // If the JWT is valid, save the comment
//             // along with the user_id from the JWT
//             // ...

//             // Send a success message as a response
//             res.json({ message: 'Comment added successfully' });
//         }
//     });
// });

// router.get('/books/:id/comments', (req, res) => {
//     // Retrieve the book id from the request parameters
//     const bookId = req.params.id;

//     // Retrieve the JWT from the request
//     const token = req.headers.authorization;

//     // Verify the JWT
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {


module.exports = {checkJWT}