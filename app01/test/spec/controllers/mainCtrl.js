describe('Controller: mainCtrl', function()
{
    var $controller, $scope, $httpBackend;
    var baseUrl = 'http://127.0.0.1:9688/contacts';

    beforeEach(function ()
    {
        this.addMatchers(
        {
            toEqualResource: function(expected)
            {
               return JSON.stringify(this.actual) === JSON.stringify(expected);
            }
        });
    
        module('datepickerApp');
        inject(function(_$controller_, $rootScope, _$httpBackend_)
        {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $scope = $rootScope.$new();
        });
    });

    afterEach(function()
    {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should retrieve a list of contacts', function()
    {
        // Arrange
        var response = [{}, {}, {}];
        $httpBackend.expectGET(baseUrl).respond(response);
        
        // Act
        $controller('MainCtrl', { $scope: $scope });
        $httpBackend.flush();
    
        // Assert
        expect($scope.contacts).toEqualResource(response);
    });

    describe('after instantiation', function()
    {
        beforeEach(function()
        {
            $httpBackend.expectGET(baseUrl).respond([{}, {}, {}]);
            $controller('MainCtrl', { $scope: $scope });
            $httpBackend.flush();
        });

        it('should add a contact', function()
        {
            // Arrange
            $scope.newContact = {};
            $httpBackend.expectPOST(baseUrl).respond(201, {});
            var countBefore = $scope.contacts.length;

            // Act
            $scope.addContact();
            $httpBackend.flush();

            // Assert
            expect($scope.contacts.length).toBe(countBefore + 1);
        });
    });
});