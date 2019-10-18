var express = require("express");
var bodyParser = require("body-parser");
var exphbrs = require("express-handlebars");

var routes = require("./controllers/burgers_controllers.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = 3000;
// app.listen(PORT);

// app.get("/:name", function(req, res) {
//   for (var i = 0; i < burgers.length; i++) {
//     if (burgers[i].name == req.params.name) {
//       return res.render("burger", burgers[i]);
//     }
//   }
// });

app.use(express.static("public"));

// app.use(bodyParser.json());

// app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening to port:", PORT);
});
