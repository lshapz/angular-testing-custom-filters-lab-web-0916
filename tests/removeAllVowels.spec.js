describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));



  it('should make the first letter uppercase', function () {
      var results = $filter('removeAllVowels')('foobar');

      expect(results).toEqual('fbr');
  });

});
