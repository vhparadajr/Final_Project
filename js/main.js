$(document).ready(function(){


  $("#update").on("submit", function(e){
    e.preventDefault();
    var apiKey = "?key=0d6af9fca12f4c3188c836c79e39403c";
    var apiURL = "http://24.34.240.165:17790/api/summary";
    // var mphAPI = "https://miningpoolhub.com/index.php?page=api&action=getminingandprofitsstatistics&api_key=d453a93ce8eec18d383afd4bf136f9e144f84f74c01834968a941c1f921e769e"


    $.ajax({
      type: "GET",
        url: apiURL + apiKey,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      // Work with the response
      success: function(res) {
        console.log(res)
        console.log(res.algorithmList[0].name)
        $('#spanAlgo').text(res.algorithmList[0].name)
        $('#spanSpeed').text(res.algorithmList[0].hashRateAvg)
        $('#profitDaily').text(res.revenuePerDay)
        $('#profitMonthly').text(res.revenuePerMonth)
        $('#gpus').text(res.gpuCount)
        $('#temp').text(res.coinList[0].temperature)
        $('#exchange').text(res.exchangeRate)
      },
      error: function(r){
        console.log(r)
      }
    });

    // $.ajax({
    //   type: "GET",
    //     url: mphAPI,
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     headers: {
    //       'Access-Control-Allow-Origin' : 'http://localhost:8080',
    //     }
    //   // Work with the response
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   error: function(r){
    //     console.log(r)
    //   }
    // });

  });
  // $("#update").on("submit", function(e){
  //   e.preventDefault();
  //   // var stop = "?action=restart";
  //   var apiKey = "?key=0d6af9fca12f4c3188c836c79e39403c";
  //   // var apiURL = "http://24.34.240.165:17790/api/summary";
  //   var mphAPI = "https://miningpoolhub.com/index.php?page=api&action=getminingandprofitsstatistics&api_key=d453a93ce8eec18d383afd4bf136f9e144f84f74c01834968a941c1f921e769e"
  //
  //
  //   $.ajax({
  //     type: "GET",
  //       url: apiURL + apiKey,
  //       contentType: "application/json; charset=utf-8",
  //       dataType: "json",
  //     // Work with the response
  //     success: function(res) {
  //       console.log(res)
  //       console.log(res.algorithmList[0].name)
  //       $('#spanAlgo').text(res.algorithmList[0].name)
  //       $('#spanSpeed').text(res.algorithmList[0].hashRateAvg)
  //       $('#profitDaily').text(res.revenuePerDay)
  //       $('#profitMonthly').text(res.revenuePerMonth)
  //       $('#gpus').text(res.gpuCount)
  //       $('#temp').text(res.coinList[0].temperature)
  //       $('#exchange').text(res.exchangeRate)
  //     },
  //     error: function(r){
  //       console.log(r)
  //     }
  //   });
  // });

















});
