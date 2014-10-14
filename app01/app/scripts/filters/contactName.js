angular.module('datepickerApp.filters')
    .filter('contactName', function(){
        return function (input)
        {
            var firstName = (input.firstName === undefined) ? "John" : input.firstName;
            var lastName = (input.lastName === undefined) ? "Doe" : input.lastName;
            
            return firstName + " " + lastName;
        }
    });