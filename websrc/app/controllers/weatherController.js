define([],
    function () {
        var weatherController = function ($scope,weatherService) {            
            this.pageTitle = "open Weather Application";
            this.searchPlaceHolder = "Enter a city name..";
            weatherService.query({},function(data){
                console.log("service success");
            });
        };
        weatherController.$inject = ["$scope","weatherService"];
        return weatherController;
    });