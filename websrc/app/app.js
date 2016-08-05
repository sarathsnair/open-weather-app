define('app', [
    'angular',
    'angularResource',
    'angularBootstrap',
    'controllers/index',
    'services/index',
    'directives/index',
    'utility/index',
    'angularLoadingBar',
    'isoCountryCode',
    'angularUIRouter'
], function (angular) {
    var ang_mod =  angular.module('weather-app', [
        'ngResource',
        'ui.bootstrap',
        'controllers',
        'directives',
        'services',
        'angular-loading-bar',
        'iso-3166-country-codes',
        'ui.router'
    ]);
    ang_mod.config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

    ang_mod.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider
        .when('/', '/home')
        .otherwise('/error');

        $stateProvider
      .state('home', {
        url: '/home',
        views: {
            'content@': {
                templateUrl: 'views/main.html'
            }
        }
      })
      .state('error',{
          url:'/error',
          views:{
              'content@':{
                  templateUrl:'views/error.html'
              }
          }
      });

      $locationProvider.html5Mode(true);
    }]);
    return ang_mod;   
});