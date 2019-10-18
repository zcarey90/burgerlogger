// $(function() {
//   $(".change-devoured").on("click", function(event) {
//     var id = $(this).data("id");
//     var devoured = $(this).data("devoured");

//     var devoured = {
//       devoured: devoured
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: devoured
//     }).then(function() {
//       console.log("changed devoured to", devoured);

//       location.reload();
//     });
//   });

//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//       name: $("#burger_name")
//         .val()
//         .trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(function() {
//       console.log("created new burger");

//       location.reload();
//     });
//   });
// });
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newDevoured = {
      sleepy: newSleep
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(function() {
      console.log("changed sleep to", newDevoured);

      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca")
        .val()
        .trim(),
      sleepy: $("[name=sleepy]:checked")
        .val()
        .trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");

      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
