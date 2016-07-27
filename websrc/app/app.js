define('app', [
    'angular',
    'angularResource',
    'angularBootstrap',
    'controllers/index',
    'services/index',
    'directives/index',
    'utility/index'
], function (angular) {
    return angular.module('weather-app', [
        'ngResource',
        'ui.bootstrap',
        'controllers',
        'directives',
        'services'
    ]);
});