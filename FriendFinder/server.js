var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// set up body parser returns json and string text and sets type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json"}));

express.static('public');

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  