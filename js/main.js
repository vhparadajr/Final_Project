$(document).ready(function(){


  $("#stop").on("submit", function(e){
    e.preventDefault();
    // var stop = "?action=restart";
    var apiKey = "0d6af9fca12f4c3188c836c79e39403c";
    var apiURL = "http://24.34.240.165:17790/api/summary";


    $.ajax({
      type: "GET",
        url: apiURL,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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
