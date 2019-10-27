var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cityList;

if (localStorage.getItem("cityList")) {
  cityList = JSON.parse(localStorage.getItem("cityList"))}
  else {cityList = [];
  } 
  //working the city name between search entry and local storage
  $("#searchbutton").click(function (){
    event.preventDefault()
    var city = $("input").val().trim();
    console.log(city) // the city entered gets logged
    var newCity = $("<li>");
    newCity.text(city); // the entered city gets written to the page
    $("#cityList").append(newCity);
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
          url: queryURL,
          method: "GET"
        })
        .then(function(response){
          $(".fiveDayForecast").empty();
          var forecastWeek = $("<h4>").text("5-Day Forecast");
          $(".fiveDayForecast").append(forecastWeek);
          console.log(forecastWeek);
          for (var i = 0; i < 5; i++) {
            var newDate = $("<div>").addClass("background-color", "light-blue", "color", "white").attr("id", i);
            var newIcon = $("<div>").addClass("row" +[i]);
            var newTemp = $("<div>").addClass("text-white");
            var newHumid = $("<div>").addClass("text-white");
            iconIndex = response.list[i].weather[0].icon;
            iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
            iconDiv = $("<img>").addClass("").attr('src', iconURL);
            newDate.html(moment().add((i+1), 'days').format('L'));
            $(".fiveDayForecast").append(newDate);
            $(newDate).append(newIcon);
            $(".row" + i).append(iconIndex);
            $(newTemp).html("Temperature (F) " + response.list[i].main.temp);
            $("#" + i).append(newTemp);
            $(newHumid).text("Humidity: " + response.list[i].main.humidity + " %");
            $("#" + i).append(newHumid);
          }     
        })
      })
      });
    });
      //https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=166a433c57516f51dfab1f7edaed8413
