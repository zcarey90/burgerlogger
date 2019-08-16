var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("burgers", ["burger_company", "BurgerBros"], [name, false], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update(
      "burgers",
      {
        BurgerBros: true
      },
      condition,
      cb
    );
  },

  delete: function(cb) {
    orm.delete("burgers", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
