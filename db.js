let mysql = require("mysql");

let connection = mysql.createConnection({
    "user": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": process.env.DB_NAME

})

connection.query("select now()", function(err, rows){
    if(err){
        console.error("Failed to test db connection", err);
    } else {
        console.log("Testing connection passed", rows[0]);
    }
})

module.exports = connection;