define('weatherService',
    function () {
        var weatherService = function ($http) {
            var apiKey = '9519611ad4c0e54e0e460a4b9ae2b2ca';
            var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';
            var currentWeatherServiceUrl = apiBaseUrl+"weather/";
            console.log("service called");
        };
        return weatherService;
    }
);