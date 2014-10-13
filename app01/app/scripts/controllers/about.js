'use strict';

/**
 * @ngdoc function
 * @name app01App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the app01App
 */
angular.module('app01App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
