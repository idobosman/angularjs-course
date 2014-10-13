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
    $scope.contacts = [
      { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
      { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
    ];
    
    $scope.newContact = {};
    
    $scope.saveContact = function()
    {
      $scope.contacts.push(angular.copy($scope.newContact));
      $scope.newContact = {};
    };
    
    $scope.deleteContact = function(contact)
    {
      var index = $scope.contacts.indexOf(contact);
      if (index !== -1)
      {
        $scope.contacts.splice(index, 1);
      }
    };
    
  });
