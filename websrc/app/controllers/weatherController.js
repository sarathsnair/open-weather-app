define([],
    function () {
        var weatherController = function ($scope, weatherService) {
            this.location = "";
            this.forecast = null;
            this.getForecastByLocation = function (location) {
                if (location === '' || location === undefined) {
                    return;
                }

                this.forecast = weatherService.getForecastDaily({ location: location });
            };
            this.parseDate = function (unixTimestamp) {
                return new Date(unixTimestamp * 1000);
            };

            this.getIconImgUrl = function (iconName) {
                return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
            };
        };
        weatherController.$inject = ["$scope", "weatherService"];
        return weatherController;
    });