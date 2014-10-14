describe('Filter: contactName', function(){
    var contactNameFilter;
    
    beforeEach(function(){
        module('datepickerApp.filters');
        inject(function($filter){
            contactNameFilter = $filter('contactName');
        });
    })
    
    it('should format the name properly"', function(){
        var contact = { firstName: 'Frank', lastName: 'de Boer' };
        expect(contactNameFilter(contact)).toBe('Frank de Boer');
    })
    
    it('should name an unknown person John Doe"', function(){
        var contact = { };
        expect(contactNameFilter(contact)).toBe('John Doe');
    })
    
    it('should change unknown firstname to John"', function(){
        var contact = { lastName: 'Jansen' };
        expect(contactNameFilter(contact)).toBe('John Jansen');
    })
    
    it('should change unknown lastname to Doe"', function(){
        var contact = { firstName: 'Piet' };
        expect(contactNameFilter(contact)).toBe('Piet Doe');
    })
});