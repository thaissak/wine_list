app.factory('userFactory', function($http){

	var factory = {};
	var user = [];

	factory.addUser = function(data, callback){
		console.log('Im in addUser factory', data);
		$http.post('/user/new', data).then(function(result){
			console.log('Inserted new user into db', result.data);
			user.push(result.data);
			callback(user);
		});
	}

	return factory;
})