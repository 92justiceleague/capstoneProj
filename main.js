let express = require("express")
require("dotenv").config();



let PORT = process.env.PORT || 8080;

let app = express();
app.use(express.json());

let authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

// let helloRoutes = require("./routes/helloRoutes");
// app.use(helloRoutes);

app.listen(PORT, function(){
console.log("Application server started on port", PORT);
})

