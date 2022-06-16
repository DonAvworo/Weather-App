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
        //get the weather data from the API website 
        fetch ('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=b34a7759c1f7ec1096a8d091ee38b500')
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
            let uvIndex = data['uvi'];

            //display the weather data
            // weatherDisplay.innerHTML = weather;
            tempDisplay.innerHTML = temp;
            // humidityDisplay.innerHTML = humidity;
            // windDisplay.innerHTML = wind;
            // uvIndexDisplay.innerHTML = uvIndex;
            

            //display the weather data using the variables created above (using DOM queryselector)linking to the display area
            weatherDisplay.textContent = weather;
            weatherDescription.textContent = description;
            // tempDisplay.textContent = temp;
            humidityDisplay.textContent = humidity;
            windDisplay.textContent = wind;
            uvIndexDisplay.textContent = uvIndex;

            //create a function to check the weather and display the appropriate image 
            // function pushWeatherIcons(weather) {  
            //     if (weather === 'Clouds') {
            //         document.querySelector('.weather-icon').src = 'assets/images/cloud.png';
            //     }
            //     else if (weather === 'Clear') {
            //         document.querySelector('.weather-icon').src = 'assets/images/sun.png';
            //     }
            //     else if (weather === 'Rain') {  
            //         document.querySelector('.weather-icon').src = 'assets/images/rain.png';
            //     }   
            //     else if (weather === 'Snow') {
            //         document.querySelector('.weather-icon').src = 'assets/images/snow.png';
            //     }
            //     else if (weather === 'Mist') {
            //         document.querySelector('.weather-icon').src = 'assets/images/mist.png';
            //     }
            //     else if (weather === 'Thunderstorm') {
            //         document.querySelector('.weather-icon').src = 'assets/images/thunderstorm.png';
            //     }
            //     else if (weather === 'Drizzle') {
            //         document.querySelector('.weather-icon').src = 'assets/images/drizzle.png';
            //     }
            //     else if (weather === 'Haze') {
            //         document.querySelector('.weather-icon').src = 'assets/images/haze.png';
            //     }
            //     else if (weather === 'Mist') {
            //         document.querySelector('.weather-icon').src = 'assets/images/mist.png'; 
            //     }
            //     else if (weather === 'Dust') {
            //         document.querySelector('.weather-icon').src = 'assets/images/dust.png'; 
            //     }
            //     else if (weather === 'Fog') {   
            //         document.querySelector('.weather-icon').src = 'assets/images/fog.png';
            //     }
            //     //if the weather is not one of the above, display the default image
            //     else {
            //         document.querySelector('.weather-icon').src = 'assets/images/default.png';
            //     };
            // } //end of pushWeatherIcons function
            
        })  
        .catch(error => alert(error)) //alert the error if there is one to the user, may not be necessary
    }; 
};
