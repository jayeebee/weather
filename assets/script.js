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
        })
    })

}