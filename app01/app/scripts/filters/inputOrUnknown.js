angular.module('datepickerApp.filters')
    .filter('inputOrUnknown', function(){
        return function (input)
        {
            return (input === undefined) ? "unknown" : input;
        }
    });