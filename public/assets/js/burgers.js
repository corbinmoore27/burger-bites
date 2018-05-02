$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDev = $(this).data("newDev");
  
      var newDevState = {
        devoured: newDev
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(
        function() {

          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
     
      var newBur = {
        burger_name: $("#bg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBur
      }).then(
        function() {
          $("#bg").val("");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });