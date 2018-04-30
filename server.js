var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: trus}));

//parse application/json
app.use(bodyParser.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start up the server
app.listen(PORT, function() {
    consol.log("Server listening on: http://localhost:" + PORT);
});