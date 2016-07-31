define([], function () {
    var weatherService = function ($resource) {
        var apiKey = '9519611ad4c0e54e0e460a4b9ae2b2ca';
        var apiBaseUrl = "http://api.openweathermap.org/data/2.5/";
        apiBaseUrl += ':path/:subPath?q=:location';
        return $resource(apiBaseUrl,
            {
                APPID: apiKey,
                mode: 'json',
                callback: 'JSON_CALLBACK',
                units: 'metric',
                lang: 'en'
            },
            {
                'getWeatherByLocation': { method: 'JSONP', params: { path: 'weather' }, isArray: false },
                'getForecastDaily': { method: 'JSONP', params: { path: 'forecast', subPath: 'daily', cnt: 7 }, isArray: false }
            });
    };
    weatherService.$inject = ["$resource"];
    return weatherService;
});