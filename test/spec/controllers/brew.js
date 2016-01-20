'use strict';

describe('Controller: BrewctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('brewbioApp'));

  var BrewctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrewctrlCtrl = $controller('BrewctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrewctrlCtrl.awesomeThings.length).toBe(3);
  });
});
