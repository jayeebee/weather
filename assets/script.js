function weatherHunt() {

    //add the search term
    var searchTerm = document.getElementById("searchTerm").value;
    //display previous searches
    var pastSearchEl = document.querySelector("#pastSearches")
    pastSearchEl.innerHTML += '<li class="border list">' + searchTerm + '</li>';
     
    

    //fetch 5 day info with searchTerm plugged into API to direct search

    fetch(
       'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&appid=3465ee1e28049b0f6897e0396c6ccb3b'
    )

    .then(function(response) {
        return response.json()
        .then(function(weatherData) {
            console.log(weatherData)

            //create basic variables and full in elements with information
            var humidity = (weatherData.list[0].main.humidity)
            var dayOneHumEl = document.querySelector("#dayOneHum")
            dayOneHumEl.innerHTML = '<h3>' + "Humidity: " + humidity + "%" +'</h3>'

            var cityName = (weatherData.city.name)
            var cityNameEl = document.querySelector("#cityName")
            cityNameEl.innerHTML = '<h1>' + cityName + '</h1>'

            var currentDate = moment().format('MM/DD/YYYY');
            var dateEl = document.getElementById("currentDate");
            dateEl.innerHTML= '<h2>' + currentDate + '</h2>'

            var currentTemp = (weatherData.list[0].main.temp)
            var currentTempEl = document.querySelector("#dayOneTemp")
            currentTempEl.innerHTML = '<h2>'+ "Temperature: " + Math.round(9/5*(currentTemp-273)+32) + "°F" +'</h2>' 

            var currentWind = (weatherData.list[0].wind.speed)
            var currentWindEl = document.querySelector("#dayOneWind")
            currentWindEl.innerHTML = '<h2>'+ "Wind Speed: " + currentWind + " MPH" +'</h2>'

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
            var oneDaySkyEl = document.querySelector("#oneDayFut")

            //if statements to add icons based on weather, I couldnt find any conditions past these 4 that werent hyper-specific
            if (oneDaySky === "Clear") {
                oneDaySkyEl.innerHTML+='<span style="color: yellow"><i class="fas   fa-sun"></i></span>'}

            if (oneDaySky ==="Rain") {
                oneDaySkyEl.innerHTML+='<span style="color: light-blue"><i class="fas fa-cloud-rain"></i></span>'}

            if (oneDaySky ==="Clouds") {
                oneDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-cloud"></i></span>'}  

            if (oneDaySky ==="Snow") {
                oneDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-snowflake"></i></span>'}  
                
            var twoDaySky = (weatherData.list[13].weather[0].main)
            var twoDaySkyEl = document.querySelector("#twoDayFut")

            if (twoDaySky === "Clear") {
                twoDaySkyEl.innerHTML+='<span style="color: yellow"><i class="fas   fa-sun"></i></span>'}

            if (twoDaySky ==="Rain") {
                twoDaySkyEl.innerHTML+='<span style="color: light-blue"><i class="fas fa-cloud-rain"></i></span>'}

            if (twoDaySky ==="Clouds") {
                twoDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-cloud"></i></span>'}  
            
            if (twoDaySky ==="Snow") {
                twoDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-snowflake"></i></span>'} 
            
            var threeDaySky = (weatherData.list[21].weather[0].main)
            var threeDaySkyEl = document.querySelector("#threeDayFut")

            if (threeDaySky === "Clear") {
                threeDaySkyEl.innerHTML+='<span style="color: yellow"><i class="fas   fa-sun"></i></span>'}

            if (threeDaySky ==="Rain") {
                threeDaySkyEl.innerHTML+='<span style="color: light-blue"><i class="fas fa-cloud-rain"></i></span>'}

            if (threeDaySky ==="Clouds") {
                threeDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-cloud"></i></span>'}  

            if (threeDaySky ==="Snow") {
                threeDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-snowflake"></i></span>'} 
            
            var fourDaySky = (weatherData.list[29].weather[0].main)
            var fourDaySkyEl = document.querySelector("#fourDayFut")

            if (fourDaySky === "Clear") {
                fourDaySkyEl.innerHTML+='<span style="color: yellow"><i class="fas   fa-sun"></i></span>'}

            if (fourDaySky ==="Rain") {
                fourDaySkyEl.innerHTML+='<span style="color: light-blue"><i class="fas fa-cloud-rain"></i></span>'}

            if (fourDaySky ==="Clouds") {
                fourDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-cloud"></i></span>'}  

            if (fourDaySky ==="Snow") {
                fourDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-snowflake"></i></span>'} 
            
            var fiveDaySky = (weatherData.list[37].weather[0].main)
            var fiveDaySkyEl = document.querySelector("#fiveDayFut")

            if (fiveDaySky === "Clear") {
                fiveDaySkyEl.innerHTML+='<span style="color: yellow"><i class="fas   fa-sun"></i></span>'}

            if (fiveDaySky ==="Rain") {
                fiveDaySkyEl.innerHTML+='<span style="color: light-blue"><i class="fas fa-cloud-rain"></i></span>'}

            if (fiveDaySky ==="Clouds") {
                fiveDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-cloud"></i></span>'}  

            if (fiveDaySky ==="Snow") {
                fiveDaySkyEl.innerHTML+='<span style="color: white"><i class="fas fa-snowflake"></i></span>'} 
    

            //i believe there is a way to pull the api with fahrenheit but this worked and i was proud of it
            var oneDayTemp = (weatherData.list[5].main.temp)
            var oneDayTempEl = document.querySelector("#oneDayFut")
            oneDayTempEl.innerHTML += '<h5>'+ "Temperature: " + Math.round(9/5*(oneDayTemp-273)+32) + "°F" +'</h5>' 

            var twoDayTemp = (weatherData.list[13].main.temp)
            var twoDayTempEl = document.querySelector("#twoDayFut")
            twoDayTempEl.innerHTML += '<h5>'+ "Temperature: " + Math.round(9/5*(twoDayTemp-273)+32) + "°F" +'</h5>'

            var threeDayTemp = (weatherData.list[21].main.temp)
            var threeDayTempEl = document.querySelector("#threeDayFut")
            threeDayTempEl.innerHTML += '<h5>'+ "Temperature: " + Math.round(9/5*(threeDayTemp-273)+32) + "°F" +'</h5>'

            var fourDayTemp = (weatherData.list[29].main.temp)
            var fourDayTempEl = document.querySelector("#fourDayFut")
            fourDayTempEl.innerHTML += '<h5>'+ "Temperature: " + Math.round(9/5*(fourDayTemp-273)+32) + "°F" +'</h5>'

            var fiveDayTemp = (weatherData.list[37].main.temp)
            var fiveDayTempEl = document.querySelector("#fiveDayFut")
            fiveDayTempEl.innerHTML += '<h5>'+ "Temperature: " + Math.round(9/5*(fiveDayTemp-273)+32) + "°F" +'</h5>'

            var oneDayHumidity = (weatherData.list[5].main.humidity)
            var oneDayHumEl = document.querySelector("#oneDayFut")
            oneDayHumEl.innerHTML += '<h4>' + "Humidity: " + oneDayHumidity + "%" +'</h4>'
            
            var twoDayHumidity = (weatherData.list[13].main.humidity)
            var twoDayHumEl = document.querySelector("#twoDayFut")
            twoDayHumEl.innerHTML += '<h4>' + "Humidity: " + twoDayHumidity + "%" +'</h4>'            
            
            var threeDayHumidity = (weatherData.list[21].main.humidity)
            var threeDayHumEl = document.querySelector("#threeDayFut")
            threeDayHumEl.innerHTML += '<h4>' + "Humidity: " + threeDayHumidity + "%" +'</h4>'           
            
            var fourDayHumidity = (weatherData.list[29].main.humidity)
            var fourDayHumEl = document.querySelector("#fourDayFut")
            fourDayHumEl.innerHTML += '<h4>' + "Humidity: " + fourDayHumidity + "%" +'</h4>'            
            
            var fiveDayHumidity = (weatherData.list[37].main.humidity)
            var fiveDayHumEl = document.querySelector("#fiveDayFut")
            fiveDayHumEl.innerHTML += '<h4>' + "Humidity: " + fiveDayHumidity + "%" +'</h4>'

            var longitude = (weatherData.city.coord.lon)
            var latitude = (weatherData.city.coord.lat)
                
            //local weather API search, using lon/lat from previous call to get specific information (UV only included in current local weather, not 5-day)
            fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=3465ee1e28049b0f6897e0396c6ccb3b")

            .then(function(responseUV) {
                return responseUV.json()
                .then(function(uvData) {
                    console.log(uvData)

                    var dayOneUv = (uvData.current.uvi)
                    var dayOneUvEl = document.querySelector("#dayOneUv")
                    dayOneUvEl.innerHTML = '<h3>' + "UV Index: " + dayOneUv + '</h3>'

                    //remove class from previous search, otherwise multiple class colors clash
                    $("#dayOneUv").removeClass("green, yellow, orange, red")

                    //add color based on guidelines from google
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