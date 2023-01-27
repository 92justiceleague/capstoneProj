let db = require("../db");
let argon = require("argon2")
let jwt = require("jsonwebtoken")



let JWT_SECRET = process.env.JWT_SECRET



let register = async function (req, res) {
    console.log("inside register function")



    let email = req.body.email;
    let password = req.body.password;
    let fullname = req.body.fullname;



    let pwHash = await argon.hash(password);



    let sql = "insert into users (email, fullname, password_hash) values (?, ? , ?)";
    let params = [email, fullname, pwHash];



    db.query(sql, params, function (err, rows) {
        if (err) {
            console.error("failed to register", err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }

    })

}



// let login = async function (req, res) {
//     console.log("inside login function")

//     let email = req.body.email; 
//     let password = req.body.password;

//     // let sql = “select id, full_name, password_hash from users where email = ?”;

//     let sql = “select password_hash from users_table where email = ?”;
//     let params = [email];



//     db.query(sql, params, async function (err, rows) {
//         if (err) {
//             console.error("could not get login info", err);
//             res.sendStatus(500);
//             return;
//         }
//         if (rows.length == 0) {
//             res.sendStatus(403);
//             return;
//         }

//         if (rows.length > 1) {
//             res.sendStatus(500);
//             return;
//         }

//         let pwHash = rows[0].password_hash;

//         let match = await argon.verify(pwHash, password);

//         if (match) {
//             let token = {
//                 "email": email,
//                 "fullname": rows[0].full_name,
//                 "userid": rows[0].id
//             };

//             let signedToken = jwt.sign(token, JWT_SECRET, { expiresIn: "1h" });

//             res.json(signedloken);
//         } else {
//             res.sendStatus(403);
//         }

//     });

// }


let login = async function(req, res){
    
    let email = req.body.email
    let password = req.body.password

    let sqlCommand = "Select password_hash from users where email = ?"
    let params = [email]

    db.query(sqlCommand, params, async function(err, results){
        if(err){
            console.log("Could not fetch login info", err)
            res.sendStatus(500)
            return
        }

        if(results.length == 0){
            res.sendStatus(403)
            return
        }

        if(results.length > 1){
            res.sendStatus(500)
            return
        }

        let password_hash = results[0].password_hash

        let goodPass = await argon.verify(password_hash, password)

        if(goodPass){
            let token = {
                "email": email,
                // "fullname": results[0].full_name

            }

            // SAME AS 62
            // token.email = email

            let signedToken = jwt.sign(token, JWT_SECRET, {expiresIn: "1hr"})

            res.json(signedToken)

        } else {
            res.sendStatus(403)
        }
    })

}






module.exports = { register, login };