var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cityList;
var city = $(".city").val();

if (localStorage.getItem("cityList")) {
  cityList = JSON.parse(localStorage.getItem("cityList"))}
  else {cityList = [];
  } 
  //working the city name between search entry and local storage
  $("#searchtext").click(function (){
    event.preventDefault()
    var city = $("input").val();
    var newCity = $("<li>");
    newCity.text(city);
    $("#cityList").append(newCity);
    var newCityButton = { name: city};
    cityList.push(newCityButton);
    newCity.attr("button");
    localStorage.setItem("cityList", JSON.stringify(cityList));
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
        })
          // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
          console.log(queryURL); // Log the queryURL
          console.log(response); // Log the resulting object
            $(".city").html("<h2>" + response.name + " Current Weather</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp); // Transfer content to HTML
            // Console log the data
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
          });
  })

      //https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=166a433c57516f51dfab1f7edaed8413
//line 3 is using the city of bujumbura and will need to be replaced with the json parse info for the city