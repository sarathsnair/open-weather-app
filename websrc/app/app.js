define('app', [
    'angular',
    'angularResource',
    'angularBootstrap',
    'controllers/index',
    'services/index',
    'directives/index',
    'utility/index',
    'angularLoadingBar',
    'isoCountryCode'
], function (angular) {
    var ang_mod =  angular.module('weather-app', [
        'ngResource',
        'ui.bootstrap',
        'controllers',
        'directives',
        'services',
        'angular-loading-bar',
        'iso-3166-country-codes'
    ]);
    ang_mod.config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
    return ang_mod;   
});