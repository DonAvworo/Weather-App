//create variables for the input and submit button
let searchInput = document.querySelector('.city-input');
let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', check4CityWeather);

//create variable for the display area to be used to display the weather data
let weatherDisplay = document.getElementById('weather');
let weatherDescription = document.getElementById('description');
let tempDisplay = document.getElementById('temp');
let humidityDisplay = document.getElementById('humidity');
let windDisplay = document.getElementById('wind');
let uvIndexDisplay = document.getElementById('uv-index');



//create a function to check for the city input and display the weather
function check4CityWeather(e) {
    e.preventDefault();
    let city = searchInput.value;
    if (city === '') {
        alert('Please enter a city');
    } 
    //if users enters random text, alert them to enter a city
    // else if (city === undefined) {
    //     alert('Please enter a city');
    // }
    else { 
        
        alert('Clicked! Checking for weather...');
        //get the weather data from the API website                     add a the key and value (units=metric) to change the temperature unit   
        fetch ('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=b34a7759c1f7ec1096a8d091ee38b500&units=metric')
        //enter promise 
        .then(response => response.json())
        // .then(data => console.log(data)) //print the data to the console for debugging purposes only 
        .then(data => {
            //create variables for the weather data
            let weather = data['weather'][0]['main'];
            let description = data['weather'][0]['description'];
            let temp = data['main']['temp'];
            let humidity = data['main']['humidity'];
            let wind = data['wind']['speed'];
            // let uvIndex = data['uvi'];
            let uvIndex = data['visibility'];

            //display the weather data using the variables created above (using DOM queryselector)linking to the display area
            weatherDisplay.textContent = weather;
            weatherDescription.textContent = description;
            tempDisplay.textContent = temp;
            humidityDisplay.textContent = humidity;
            windDisplay.textContent = wind;
            uvIndexDisplay.textContent = uvIndex;

            pushWeatherIcons(); //call the function (created below) to display the appropriate image
            storeWeatherData(); //call the function to store the weather data in local storage
        })  
        .catch(error => alert(error)) //alert the error if there is one to the user, may not be necessary
    }; 
}; //end of check4CityWeather function

//create a function to check the weather and display the appropriate image 
  function pushWeatherIcons () {  //this function is called from the check4CityWeather function
    if (weather === 'Clouds' || weather === 'Cloudy') {
        document.querySelector('.weather-icon').src = 'assets/images/cloud.png';
    }
    else if (weather === 'Clear') {
        document.querySelector('.weather-icon').src = 'assets/images/sun.png';
    }
    else if (weather === 'Rain') {  
        document.querySelector('.weather-icon').src = 'assets/images/rain.png';
    }   
    else if (weather === 'Snow') {
        document.querySelector('.weather-icon').src = 'assets/images/snow.png';
    }
    else if (weather === 'Mist') {
        document.querySelector('.weather-icon').src = 'assets/images/mist.png';
    }
    else if (weather === 'Thunderstorm') {
        document.querySelector('.weather-icon').src = 'assets/images/thunderstorm.png';
    }
    else if (weather === 'Drizzle') {
        document.querySelector('.weather-icon').src = 'assets/images/drizzle.png';
    }
    else if (weather === 'Haze') {
        document.querySelector('.weather-icon').src = 'assets/images/haze.png';
    }
    else if (weather === 'Mist') {
        document.querySelector('.weather-icon').src = 'assets/images/mist.png'; 
    }
    else if (weather === 'Dust') {
        document.querySelector('.weather-icon').src = 'assets/images/dust.png'; 
    }
    else if (weather === 'Fog') {   
        document.querySelector('.weather-icon').src = 'assets/images/fog.png';
    }
    else {
        document.querySelector('.weather-icon').src = 'assets/images/default.png';
        // if the weather is not one of the above, will display a default image
    };
}; //end of pushWeatherIcons function

//create a function to store the weather data in local storage
function storeWeatherData () { //this function is called from the check4CityWeather function
    let city = searchInput.value;
    let weather = weatherDisplay.textContent;
    let description = weatherDescription.textContent;
    let temp = tempDisplay.textContent;
    let humidity = humidityDisplay.textContent;
    let wind = windDisplay.textContent;
    let uvIndex = uvIndexDisplay.textContent;
    let weatherData = {
        city: city,
        weather: weather,
        description: description,
        temp: temp,
        humidity: humidity,
        wind: wind,
        uvIndex: uvIndex
    };
    localStorage.setItem('weatherData', JSON.stringify(weatherData)); //the setItem method is used to store the data in local storage as a string
} //end of storeWeatherData function                                  //JSON.stringify is used to convert the data to a string ref: https://www.w3schools.com/js/js_json_stringify.asp

//create a function to retrieve the weather data from local storage = CURRENTLY WORKING ON THIS SEGMENT!!!!!
function retrieveWeatherData () { //HOW DO I GET THE DATA TO DISPLAY ON PAGE LOAD?
    let weatherData = JSON.parse(localStorage.getItem('weatherData')); // the getItem method is used to retrieve the data from local storage as a string
                                                                       // the JSON.parse method is used to convert the string to a JavaScript object
    // to retrieve the data from local storage
    searchInput.value = weatherData.city;                              
    weatherDescription.textContent = weatherData.description;
    tempDisplay.textContent = weatherData.temp;
    humidityDisplay.textContent = weatherData.humidity;
    windDisplay.textContent = weatherData.wind;
    uvIndexDisplay.textContent = weatherData.uvIndex;
    pushWeatherIcons(); //this will recall the function to display the appropriate image

    // write an if statement for when the weather data is not in local storage
    if (weatherData === null) {
        weatherDisplay.textContent = 'No weather data found';
        weatherDescription.textContent = 'No weather data found';
        tempDisplay.textContent = 'No weather data found';
        humidityDisplay.textContent = 'No weather data found';
        windDisplay.textContent = 'No weather data found';
        uvIndexDisplay.textContent = 'No weather data found';
        document.querySelector('.weather-icon').src = 'assets/images/default.png';
    }

    // if the weather data is in local storage, the following will be displayed
    else {
        weatherDisplay.textContent = weatherData.weather;
        weatherDescription.textContent = weatherData.description;
        tempDisplay.textContent = weatherData.temp;
        humidityDisplay.textContent = weatherData.humidity;
        windDisplay.textContent = weatherData.wind;
        uvIndexDisplay.textContent = weatherData.uvIndex;
        document.querySelector('.weather-icon').src = 'assets/images/default.png';
    }

} //end of retrieveWeatherData function