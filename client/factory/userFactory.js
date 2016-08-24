app.factory('userFactory', function($http){

	var factory = {};

	factory.addUser = function(data, callback){
		$http.post('/users', data).then(function(result){
			console.log('Inserted new user into db', result.data);
			callback(result.data);
		});
	},

	factory.login = function(data, callback){
		console.log('Im in addUser factory', data);
		$http.post('users/login', data).then(function(result){
			console.log('login came back from server', result.data);
			callback(result.data);
		});
	},

	factory.userInfo = function(userId, callback){
		console.log('in user info factory', userId);
		$http.get('/users/'+userId).then(function(userData){
			console.log('got user back from server', userData.data);
			callback(userData.data);
		});
	},

	factory.updateUser = function(user, callback){
		console.log('in update user factory', user);
		$http.post('/users/'+user.id, user).then(function(data){
			console.log('got update response back from server', data.data);
			callback(data.data);
		});
	},

	factory.changePwd = function(data, callback){
		console.log('in change pwd factory', data);
		$http.post('/users/'+data.id+'/change_pwd', data).then(function(data){
			console.log('got pwd update back from server', data.data);
			callback(data.data);
		});
	}

	return factory;
})