$(document).ready(function(){


  $("#stop").on("submit", function(e){
    e.preventDefault();
    // var stop = "?action=restart";
    // var apiKey = "464729fb";
    var apiURL = "http://desktop-0dq00d9:17790/miner/4";


    $.ajax({
      type: "GET",
        url: apiURL,
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
      // Work with the response
      success: function(res) {
        console.log(res)
      },
      error: function(r){
        console.log(r)
      }
    });

  });
});
