function weatherHunt() {

    var searchTerm = document.getElementById("searchTerm").value;

    fetch(
       'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&appid=3465ee1e28049b0f6897e0396c6ccb3b'
    )

    .then(function(response) {
        return response.json()
        .then(function(weatherData) {
            console.log(weatherData)

            var humidity = (weatherData.list[0].main.humidity)
            var dayOneHumEl = document.querySelector("#dayOneHum")
            dayOneHumEl.innerHTML = '<h3>' + "Humidity: " + humidity + "%" +'</h3>'

            var cityName = (weatherData.city.name)
            var cityNameEl = document.querySelector("#cityName")
            cityNameEl.innerHTML = '<h1>' + cityName + '</h1>'

            var currentDate = (weatherData.list[0].dt_txt)
            var currentDateEl = document.querySelector("#currentDate")
            currentDateEl.innerHTML = '<h2>' + currentDate + '</h2>'

            var currentTemp = (weatherData.list[0].main.temp)
            var currentTempEl = document.querySelector("#dayOneTemp")
            currentTempEl.innerHTML = '<h2>'+ "Temperature: " + Math.round(9/5*(currentTemp-273)+32) + "°F" +'</h2>'

            var currentWind = (weatherData.list[0].wind.speed)
            var currentWindEl = document.querySelector("#dayOneWind")
            currentWindEl.innerHTML = '<h2>'+ "Wind Speed: " + currentWind + "MPH" +'</h2>'

            var oneDayDate = (weatherData.list[5].dt_txt)
            var oneDayDateEl = document.querySelector("#oneDayFut")
            oneDayDateEl.innerHTML = '<h4>' + oneDayDate + '</h4>'

            var twoDayDate = (weatherData.list[13].dt_txt)
            var twoDayDateEl = document.querySelector("#twoDayFut")
            twoDayDateEl.innerHTML = '<h4>' + twoDayDate + '</h4>'

            var threeDayDate = (weatherData.list[21].dt_txt)
            var threeDayDateEl = document.querySelector("#threeDayFut")
            threeDayDateEl.innerHTML = '<h4>' + threeDayDate + '</h4>'

            var fourDayDate = (weatherData.list[29].dt_txt)
            var fourDayDateEl = document.querySelector("#fourDayFut")
            fourDayDateEl.innerHTML = '<h4>' + fourDayDate + '</h4>'

            var fiveDayDate = (weatherData.list[37].dt_txt)
            var fiveDayDateEl = document.querySelector("#fiveDayFut")
            fiveDayDateEl.innerHTML = '<h4>' + fiveDayDate + '</h4>'

            var oneDaySky = (weatherData.list[5].weather[0].main)
            var oneDaySkyEl = $("#oneDayFutI")
            oneDaySkyEl.addClass("fas fa-sun")
            console.log(oneDaySky)
            

            var longitude = (weatherData.city.coord.lon)
            var latitude = (weatherData.city.coord.lat)
       
            fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=3465ee1e28049b0f6897e0396c6ccb3b")

            .then(function(responseUV) {
                return responseUV.json()
                .then(function(uvData) {
                    console.log(uvData)

                    var dayOneUv = (uvData.current.uvi)
                    var dayOneUvEl = document.querySelector("#dayOneUv")
                    dayOneUvEl.innerHTML = '<h3>' + "UV Index: " + dayOneUv + '</h3>'

                    if (dayOneUv < 3) {
                        $("#dayOneUv").addClass("green")
                    }
                    if (dayOneUv >= 3 && dayOneUv < 6 ) {
                        $("#dayOneUv").addClass("yellow")
                    }
                    if (dayOneUv >=6 && dayOneUv < 8) {
                        $("#dayOneUv").addClass("orange")
                    }
                    if (dayOneUv > 8) {
                        $("#dayOneUv").addClass("red")
                    }
                })
            })       
        })
    })

        
}