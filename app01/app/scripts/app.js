'use strict';

/**
 * @ngdoc overview
 * @name datepickerApp
 * @description
 * # datepickerApp
 *
 * Main module of the application.
 */
angular
  .module('datepickerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datepickerApp.filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/**
 * @ngdoc overview
 * @name datepickerApp.filters
 * @description
 * # datepickerApp filters
 *
 * Filters module of the application.
 */
angular
  .module('datepickerApp.filters', []); 