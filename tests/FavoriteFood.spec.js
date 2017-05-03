describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

    it('should filter on food correctly', function () {
     var mockedList = [{
         favoriteFood: 'Chocolate',
         location: {
           city: 'Pittsburgh'
         }
     }, {
         favoriteFood: 'Carrots',
         location: {
           city: 'New York'
         }
     }, {
         favoriteFood: 'Cabbages',
         location: {
           city: 'Chicago'
         }
     }];

      var results = $filter('favoriteFood')(mockedList, 'Chocolate');

      expect(results.length).toBe(1);
      expect(results[0].location.city).toBe('Pittsburgh');
  });

	
});
