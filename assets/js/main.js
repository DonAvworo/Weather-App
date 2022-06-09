const WEATHER_API_BASE_URL = ’https://api.openweathermap.org’;
const WEATHER_API_KEY = ‘d91f911bcf2c0f925fb6535547a5ddc9’;
const MAX_DAILY_FORECAST = 5;
// Lookup the location to get the Lat/Lon
    var apiUrl = `${WEATHER_API_BASE_URL}/geo/1.0/direct?q=${search}&limit=5&appid=${WEATHER_API_KEY}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Pick the First location from the results
            const location = data[0];
 // Get the Weather for the cached location
    var apiUrl = `${WEATHER_API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data =>