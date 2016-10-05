var axios = require('axios');

// Convention when using constants is to use UPPER_CASE and underscores
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5c33f3265314ae27bbb4d2bae10afe55&units=imperial';

// API: 5c33f3265314ae27bbb4d2bae10afe55
// BAse URL: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1

// Going to use a promise to return weather data to weather.jsx
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // Built in function for fixing encoded URLs
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // New ES6 feature called "Template Strings"
    // Axios is the service that makes our API Call for us
    // the if / else statement inside the promise is because OpenWeatherMap has some funky data handling
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message); // Where does this 'throw new Error' syntax come from, Open Weather Map?
    });
  }
}
