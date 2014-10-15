'use strict';

/**
 * @ngdoc function
 * @name datepickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the datepickerApp
 */
angular.module('datepickerApp')
  .controller('MainCtrl', function($scope, $resource){
    var contactResource = $resource(
                            'http://127.0.0.1:9688/contacts/:contactId',
                            { contactId: '@contactId' },
                            { update: { method: 'PUT' } }
                          );
    
    $scope.contacts = contactResource.query(
      function(data){
        // Retreiving contacts succeeded. Optionally do something.  
      },
      function(error)
      {
        // Retreiving contacts failed.
        alert('Something went wrong while retreiving the contacts.');
      }
    );
    
    // Do something when retreiving the contacts went wrong.
    // $scope.contacts.$promise.catch(function(error){
    //   console.log("Something went wrong: " + error);
    // });
    
    $scope.newContact = {};
    $scope.currentlyEditingContact = {};
    $scope.editContactCopy = {};
    
    $scope.addContact = function()
    {
      contactResource.save(
        $scope.newContact,
        function(data){
          $scope.contacts.push(data);          
          
          var contactName = $scope.newContact.firstName + ' ' + $scope.newContact.lastName;
          alert('Successfully added the new contact (' + contactName + ').');
          
          $scope.newContact = {};
          
          // Set the form fields pristine. This prevents the form to show error styles on the form fields due to dirty and invalid field values.
          $scope.newContactForm.$setPristine();
        },
        function(error){
          alert('Adding the new contact (' + $scope.newContact.firstName + ' ' + $scope.newContact.lastName + ') failed due to a server error.');
        }
      );
      
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
