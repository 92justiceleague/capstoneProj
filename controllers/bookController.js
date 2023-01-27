let db = require("../db")

const createBook = function(req, res){
    let bookName = req.body.bookName
    let genre = req.body.genre
    let author = req.body.author

    let sqlCommand = "INSERT INTO bookTable(bookName, genre, author) VALUES (?, ?, ?)"

    let params = [bookName, genre, author]

    db.query(sqlCommand, params, function(error, results) {

        if(error){
            console.log("Could not create book", error)
            res.sendStatus(500)
        }else{
            console.log("Book has been created", results)
            res.sendStatus(202)
        }
        
    })
}

const listBooks = function(req, res){
    let sqlCommand = "SELECT * FROM bookTable"

    db.query(sqlCommand, function(error, results){
        if(error){
            console.log("Could not list books", error)
            res.sendStatus(500)
        }else{
            console.log("Here is your list of books", results)
           res.json(results)
        }
    })
}


const createComment = function(req,res){
    let commentBody = req.body.commentBody
    let bookId = req.params.id
    let sqlCommand= "INSERT INTO commentTable(bookId, commentBody) VALUES (?, ?)"

    let params = [bookId, commentBody]

    db.query(sqlCommand, params, function(error, results){
        if(error){
        console.log("Comment not entered", error)
        res.sendStatus(500)
    }else{
        console.log("Comment entered successfully")
        res.sendStatus(202)
    }
})
}


module.exports = {
    createBook, listBooks, createComment
}

