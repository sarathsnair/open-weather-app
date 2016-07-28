define('controllers/index', [
    'angular',
    'controllers/weatherController',
    'controllers/homeController'
], function (angular, weatherController,homeController) {
    var controllers = angular.module('controllers', []);
    controllers.controller('weatherController', weatherController);
    controllers.controller('homeController',homeController);
    return controllers;
});