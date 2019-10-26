// require dependancies
var express = require("express");

// set up port locations
var PORT = process.env.PORT ||3000;

var app = express();

app.use(express.static(__dirname + "/public"));

//have the requests go through router middleware
app.use(router);

//port listen
app.listen(PORT, function() {
    console.log("listening at port" + PORT);
});