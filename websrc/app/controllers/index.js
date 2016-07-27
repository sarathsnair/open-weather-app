define('controllers/index', [
    'angular',
    'controllers/weatherController'
], function (angular, weatherController) {
    var controllers = angular.module('controllers', []);
    controllers.controller('weatherController', weatherController);
    return controllers;
});