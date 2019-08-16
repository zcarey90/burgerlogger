var express = require("express");
var bodyParser = require("body-parser");
var exphbrs = require("express-handlebars");

var PORT = process.env.PORT || 8889;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening to port:", PORT);
});
