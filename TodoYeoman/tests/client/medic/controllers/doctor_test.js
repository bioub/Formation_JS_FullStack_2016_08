'use strict';

describe('doctor', function() {
    var _scope;
    var CONTROLLER_NAME = 'doctor as doctorCtrl';

    beforeEach(module('TodoYeoman'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));

    describe('init', function() {
      it('should create the controller correctly', inject(function($controller) {
          $controller(CONTROLLER_NAME, {$scope: _scope});
      }));
    });
});
