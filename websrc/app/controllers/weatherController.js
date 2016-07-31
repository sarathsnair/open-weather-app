define([],
    function () {
        var weatherController = function ($scope, weatherService) {
            this.pageTitle = "open Weather Application";
            this.searchPlaceHolder = "Enter a city name..";
            this.location = "cochin";
            this.forecast;
            this.getForecastByLocation = function (location) {
                if (location === '' || location === undefined) {
                    return;
                }

                this.forecast = weatherService.getForecastDaily({ location: location });
                console.log(this.forecast);
            };
            //this.getForecastByLocation(this.location);

            this.parseDate = function (unixTimestamp) {
                return new Date(unixTimestamp * 1000);
            };

            this.getIconImgUrl = function (iconName) {
                console.log(iconName);
                return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
            };
        };
        weatherController.$inject = ["$scope", "weatherService"];
        return weatherController;
    });