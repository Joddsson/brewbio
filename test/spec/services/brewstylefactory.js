'use strict';

describe('Service: brewstyleFactory', function () {

  // load the service's module
  beforeEach(module('brewbioApp'));

  // instantiate service
  var brewstyleFactory;
  beforeEach(inject(function (_brewstyleFactory_) {
    brewstyleFactory = _brewstyleFactory_;
  }));

  it('should do something', function () {
    expect(!!brewstyleFactory).toBe(true);
  });

});
