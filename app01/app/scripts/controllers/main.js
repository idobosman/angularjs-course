'use strict';

/**
 * @ngdoc function
 * @name app01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app01App
 */
angular.module('app01App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
