'use strict';

describe('Service: brewfactory', function () {

  // load the service's module
  beforeEach(module('brewbioApp'));

  // instantiate service
  var brewfactory;
  beforeEach(inject(function (_brewfactory_) {
    brewfactory = _brewfactory_;
  }));

  it('should do something', function () {
    expect(!!brewfactory).toBe(true);
  });

});
