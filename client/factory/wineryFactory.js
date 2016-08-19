app.factory('wineryFactory', function($http){

	var factory = {};
	var winery = [];

	factory.addWinery = function(data, callback){
		console.log('Im in addWinery factory', data);
		$http.post('/winery/new', data).then(function(result){
			console.log('Inserted new winery into db', result.data);
			winery.push(result.data);
			callback(winery);
		});
	}

	return factory;
})