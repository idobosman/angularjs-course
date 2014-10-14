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
});