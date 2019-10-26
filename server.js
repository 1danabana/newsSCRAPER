// require dependancies
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var express = require("express");

// set up port locations
var PORT = process.env.PORT ||3000;

//initiate express
var app = express();

var router = express.Router();

//desiginate public folder as directory
app.use(express.static(__dirname + "/public"));

//connect handlebars to express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//connect body parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//have the requests go through router middleware
app.use(router);

//use deployed database or local mongoheadlines db
var db = process.env.MONGODB_URI || "monodb://localhost/mongoHeadlines";

//connect mongoose to out db
mongoose.connect(db, function(error) {
    if (error){
        console.log(error);
    }
    else{
        console.log("mongoose connection is successful");
    }
});

//port listen
app.listen(PORT, function() {
    console.log("listening at port" + PORT);
});