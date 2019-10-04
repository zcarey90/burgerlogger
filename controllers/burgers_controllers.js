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
    res.render("burgers", { brgrs: burger_info });
  });
});

router.post("/api/burgers", function(req, res) {
  if (req.body.burger_name == "") {
    console.log("No burger type requested");
    res.json("Error");
  } else {
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.json({ id: result.insertId });
    });
  }
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
  });
});

module.exports = router;
