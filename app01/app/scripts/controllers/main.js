'use strict';

/**
 * @ngdoc function
 * @name datepickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the datepickerApp
 */
angular.module('datepickerApp')
  .controller('MainCtrl', function($scope){
    $scope.contacts = [
      { firstName: 'Frank', lastName: 'Muscles', email: 'frank@muscles.com' },
      { firstName: 'Eddy', lastName: 'Valentino', email: 'eddy@valfam.co.uk' }
    ];
    
    $scope.newContact = {};
    $scope.currentlyEditingContact = {};
    $scope.editContactCopy = {};
    
    $scope.addContact = function()
    {
      $scope.contacts.push(angular.copy($scope.newContact));
      $scope.newContact = {};
    };
    
    $scope.startEditingContact = function(contact)
    {
      $scope.currentlyEditingContact = contact;
      $scope.editContactCopy = angular.copy(contact);
    }
    
    $scope.saveEditedContact = function(contact)
    {
      var index = $scope.contacts.indexOf($scope.currentlyEditingContact);
      if (index !== -1)
      {
        $scope.contacts[index] = contact;
      }
      $scope.currentlyEditingContact = {};
      $scope.editContactCopy = {};      
    }
    
    $scope.deleteContact = function(contact)
    {
      var index = $scope.contacts.indexOf(contact);
      if (index !== -1)
      {
        $scope.contacts.splice(index, 1);
      }
    };
    
  });
