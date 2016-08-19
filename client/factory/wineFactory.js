app.factory('wineFactory', function($http){

	var factory = {};
	var wine = [];

	factory.addWine = function(data, callback){
		console.log('Im in addWine factory', data);
		$http.post('/wine/new', data).then(function(result){
			console.log('Inserted new wine into db', result.data);
			wine.push(result.data);
			callback(wine);
		});
	}

	return factory;
})