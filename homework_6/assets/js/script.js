var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cityList;

if (localStorage.getItem("cityList")) {
  cityList = JSON.parse(localStorage.getItem("cityList"))}
  else {cityList = [];
  } 
  //working the city name between search entry and local storage
  $("#searchbutton").click(function () {
    event.preventDefault()
    var city = $("input").val().trim();
    console.log(city) // the city entered gets logged
    var newCity = $("<li>");
    newCity.text(city); // the entered city gets written to the page
    newCity.addClass("btn list-group-item").attr("id", "citybutton" + cityList.length);
    $(".newcity-button").append(newCity);
    var newCityButton = { name: city};
    cityList.push(newCityButton);
    // newCityButton.addClass("button");
    localStorage.setItem("cityList", JSON.stringify(cityList));
    $("input").val("");
    //Current city weather
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    // found how to get the respective weather related symbols - https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon    
    $.ajax({
      url: queryURL,
      method: "GET"
        })
          // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
          console.log(queryURL); // Log the queryURL
          console.log(response); // Log the resulting object
            $(".city").html("<h2>" + response.name + " " + moment().format('L') + "</h2>");
            var iconIndex = response.weather[0].icon;
            var iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
            var iconDiv = $("<img>").attr('src', iconURL);
            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&apikey=" + APIKey;
            $(".city").append(iconDiv);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp); // Transfer content to HTML
            // Console log the data
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity + " %");
            console.log("Temperature (F): " + response.main.temp);
            var lon = response.coord.lon;
            var lat = response.coord.lat;
    var uvIndex = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&apikey=" + APIKey;
    $.ajax({
      url: uvIndex,
      method: "GET"
        })
        .then(function (response){
          console.log(uvIndex);
          console.log(response);
            $(".uv").text("UV Index: " + response[0].value);
            if (response[0].value > 0 && response[0].value <=6.5){
              $(".uv").css( "background-color", "yellow" );
            }
            else if (response[0].value > 6.5) {
              $(".uv").css( "background-color", "orange");
            }
             console.log("UV Index: " + response[0].value);
             $.ajax({
              url: forecastURL,
              method: "GET"
              })
              .then(function(response){
                $(".fiveDayForecast").empty();
                var forecastWeek = $("<h4>").text("5-Day Forecast:").addClass("row col-md-12");
                $(".fiveDayForecast").append(forecastWeek);
                console.log($(".fiveDayForecast"));
                console.log(forecastWeek);
                for (var i = 0; i < 5; i++) {
                  var newDate = $("<div>").addClass("newdate").attr("id", i);
                  var newIcon = $("<div>").addClass("row newicon" +[i]);
                  var newTemp = $("<div>").addClass("text-black newtemp");
                  var newHumid = $("<div>").addClass("text-black newhumid");
                  iconIndex = response.list[i].weather[0].icon;
                  iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
                  newIcon = $("<img>").addClass("").attr('src', iconURL);
                  newDate.html(moment().add((i+1), 'days').format('L'));
                  
                  $(".fiveDayForecast").append(newDate);
                  $(newDate).append(newIcon);
                  $(".row" + i).append(iconIndex);
                  $(newTemp).html("Temperature " + ((response.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + ' &deg' + "F");
                  $("#" + i).append(newTemp);
                  $(newHumid).text("Humidity: " + response.list[i].main.humidity + " %");
                  $("#" + i).append(newHumid);
                }     
              })
            })
            });
          });
$(".buttons").on("click","li", function(){
  event.preventDefault();
  var target = $(event.target);
  if (target.is("li")) {
    var newCityButtonText = target.text();
  }
  //Current city weather
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCityButtonText + "&units=imperial&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
        })
        .then(function(response) {
          console.log(queryURL); // Log the queryURL
          console.log(response); // Log the resulting object
            $(".city").html("<h2>" + response.name + " " + moment().format('L') + "</h2>");
            var iconIndex = response.weather[0].icon;
            var iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
            var iconDiv = $("<img>").attr('src', iconURL);
            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + newCityButtonText + "&apikey=" + APIKey;
            $(".city").append(iconDiv);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp); // Transfer content to HTML
            // Console log the data
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity + " %");
            console.log("Temperature (F): " + response.main.temp);
            var lon = response.coord.lon;
            var lat = response.coord.lat;
    var uvIndex = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&apikey=" + APIKey;
    $.ajax({
      url: uvIndex,
      method: "GET"
        })
        .then(function (response){
          console.log(uvIndex);
          console.log(response);
            $(".uv").text("UV Index: " + response[0].value);
            if (response[0].value > 0 && response[0].value <=6.5){
              $(".uv").css( "background-color", "yellow" );
            }
            else if (response[0].value > 6.5) {
              $(".uv").css( "background-color", "orange");
            }
             console.log("UV Index: " + response[0].value);
             $.ajax({
              url: forecastURL,
              method: "GET"
              })
              .then(function(response){
                $(".fiveDayForecast").empty();
                var forecastWeek = $("<h4>").text("5-Day Forecast:");
                $(".fiveDayForecast").append(forecastWeek).addClass("row col-md-12");
                console.log($(".fiveDayForecast"));
                console.log(forecastWeek);
                for (var i = 0; i < 5; i++) {
                  var newDate = $("<div>").addClass("newdate").attr("id", i);
                  var newIcon = $("<div>").addClass("row newicon" +[i]);
                  var newTemp = $("<div>").addClass("text-black newtemp");
                  var newHumid = $("<div>").addClass("text-black newhumid");
                  iconIndex = response.list[i].weather[0].icon;
                  iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
                  newIcon = $("<img>").addClass("").attr('src', iconURL);
                  newDate.html(moment().add((i+1), 'days').format('L'));
                  
                  $(".fiveDayForecast").append(newDate);
                  $(newDate).append(newIcon);
                  $(".row" + i).append(iconIndex);
                  $(newTemp).html("Temperature " + ((response.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + ' &deg' + "F");
                  $("#" + i).append(newTemp);
                  $(newHumid).text("Humidity: " + response.list[i].main.humidity + " %");
                  $("#" + i).append(newHumid);
                }     
              })
            })
            });
          });
          $(document).ready(function () {
            if (cityList !==[]) {
                for (var i = 0; i < cityList.length; i++) {
                    localStorage.getItem(cityList[i].name);
                    var buttons = $("<li>");
                    buttons.text(cityList[i].name).addClass("btn list-group-item").attr("id", "citybutton" + i);
                    $(".buttons").append(buttons);
                }
            }
        })
