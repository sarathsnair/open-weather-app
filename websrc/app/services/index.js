define('services/index', [
    'angular',
    'services/weatherService'
], function (angular,weatherServices) {
    var services = angular.module('services',[]);
    services.service('weatherService',weatherServices);
    return services;
});