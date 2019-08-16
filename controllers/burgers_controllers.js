var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burgers", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burger_info) {
    res.render("index", { burger_info });
  });
});

router.post("/burgers/create", function(req, res) {
  if (req.body.burger_name == "") {
    console.log("No burger type requested");
    res.redirect("/");
  } else {
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
  }
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.redirect;
  });
});

module.exports = router;
