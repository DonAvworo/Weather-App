//create variables for the input and submit button
let searchInput = document.querySelector('.city-input');
let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', check4CityWeather);

//create variable for the display area
let weatherDisplay = document.querySelector('.weather');
let tempDisplay = document.querySelector('.temperature');
let humidityDisplay = document.querySelector('.humidity');
let windDisplay = document.querySelector('.wind');
let uvIndexDisplay = document.querySelector('.uv-index');



//create a function to check for the city input
function check4CityWeather(e) {
    e.preventDefault();
    let city = searchInput.value;
    if (city === '') {
        alert('Please enter a city');
    }
    else { 
        // console.log(city);
       // getWeather(city);

        alert('Clicked! Checking for weather...');
    //get the weather data from the API website 
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=b34a7759c1f7ec1096a8d091ee38b500')
    //enter promise
    .then(response => response.json())
    .then(data => console.log(data)) //print the data to the console for debugging
    .catch(error => alert(error)) //alert the error if there is one to the user, may not be necessary
    } 
};
