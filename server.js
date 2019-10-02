var express = require("express");
var bodyParser = require("body-parser");
var exphbrs = require("express-handlebars");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = 3000;
// app.listen(PORT);

var burgers = [
  { name: "hamburger", price: 10, awesomeness: 4 },
  { name: "cheeseburger", price: 5, awesomeness: 8 },
  { name: "baconburger", price: 3, awesomeness: 5 }
];

app.get("/", function(req, res) {
  res.render("burger", { burgers: burgers });
});

app.get("/:name", function(req, res) {
  for (var i = 0; i < burgers.length; i++) {
    if (burgers[i].name == req.params.name) {
      return res.render("burger", burgers[i]);
    }
  }
});

app.use(express.static("public"));

// app.use(bodyParser.json());

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening to port:", PORT);
});
