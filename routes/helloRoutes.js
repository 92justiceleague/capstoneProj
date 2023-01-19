let express = require("express");

let router = new express.Router();

let middleware = require("../authMiddleware");

router.get("/hello", function(req,res){
    res.send("hey here, hope you are having a good day");
})

router.get("/secretHandShake", middleware.checkJWT, funtion(req,res){
    let token = req["_token"];

    res.send("Left right, left left up down snap, hey there"+token.fullname);
})

module.exports = router;