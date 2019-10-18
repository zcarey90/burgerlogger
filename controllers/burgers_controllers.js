var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

var burgers = [
  { name: "hamburger", price: 10, awesomeness: 4 },
  { name: "cheeseburger", price: 5, awesomeness: 8 },
  { name: "baconburger", price: 3, awesomeness: 5 }
];

router.get("/", function(req, res) {
  burger.all(function(burger_info) {
    console.log(burger_info);
    res.render("burgers", { burger_name: burger_info });
  });
});

router.post("/api/burgers", function(req, res) {
  if (req.body.burger_name == "") {
    console.log("No burger type requested");
    res.json("Error");
  } else {
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      // res.json({ id: result.insertId });
      res.redirect("/");
    });
  }
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
