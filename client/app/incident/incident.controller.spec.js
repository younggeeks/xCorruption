'use strict';

describe('Controller: IncidentCtrl', function () {

  // load the controller's module
  beforeEach(module('exposeApp'));

  var IncidentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncidentCtrl = $controller('IncidentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
