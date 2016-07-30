define('services/index', [
    'angular',
    'services/weatherService'
], function (angular,weatherService) {
    var services = angular.module('services',[]);
    services.service('weatherService',weatherService);
    return services;
});