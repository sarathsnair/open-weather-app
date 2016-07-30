define([], function () {
    var weatherService = function ($resource) {
        var apiKey = '9519611ad4c0e54e0e460a4b9ae2b2ca';
        var apiBaseUrl = "http://api.openweathermap.org/data/2.5/";
        apiBaseUrl += "weather?appid="+apiKey;
        return $resource(apiBaseUrl,
            {},
            { 'getForecastByLocation': { method: 'GET', isArray: false } });
    };
    weatherService.$inject = ["$resource"];
    return weatherService;
});