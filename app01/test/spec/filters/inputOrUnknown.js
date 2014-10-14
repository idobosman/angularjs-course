describe('Filter: inputOrUnknown', function(){
    var inputOrUnknownFilter;
    
    beforeEach(function(){
        module('datepickerApp.filters');
        inject(function($filter){
            inputOrUnknownFilter = $filter('inputOrUnknown');
        });
    })
    
    it('should return unknown with undefined input value"', function(){
        var input = undefined;
        expect(inputOrUnknownFilter(input)).toBe('unknown');
    })
    
    it('should return unknown with null input value"', function(){
        var input = null;
        expect(inputOrUnknownFilter(input)).toBe('unknown');
    })
    
    it('should return unknown with empty input value"', function(){
        var input = "";
        expect(inputOrUnknownFilter(input)).toBe('unknown');
    })
    
    it('should return value from a correct input value"', function(){
        var input = "example@emailaddress.com";
        expect(inputOrUnknownFilter(input)).toBe('example@emailaddress.com');
    })
});