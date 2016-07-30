define([],
    function () {
        var weatherController = function ($scope, weatherService) {
            this.pageTitle = "open Weather Application";
            this.searchPlaceHolder = "Enter a city name..";
            this.location = "";
            this.getForecastByLocation = function (location) {
                //console.log(location);
                if (location == '' || location == undefined) {
                    return;
                }
                // weatherService.query("kochi");
                /*var apiKey = '9519611ad4c0e54e0e460a4b9ae2b2ca';
                $http.get("http://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+location)
                    .then(function (response) {
                        $scope.data = response.data;
                    });*/

                weatherService.getForecastByLocation({ q: location }, function (data) {
                    console.log(data);
                },
                    function (errorPayload) {
                        console.log(errorPayload);
                    }
                );
            };
        };
        weatherController.$inject = ["$scope", "weatherService"];
        return weatherController;
    });