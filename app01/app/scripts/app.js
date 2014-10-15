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
    'datepickerApp.filters',
    'datepickerApp.directives'
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
  
/**
 * @ngdoc overview
 * @name datepickerApp.directives
 * @description
 * # datepickerApp directives
 *
 * Directives module of the application.
 */
angular
  .module('datepickerApp.directives', []);