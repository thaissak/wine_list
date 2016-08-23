app.factory('wineryFactory', function($http){

	var factory = {};
	var winery = [];

	factory.addWinery = function(data, callback){
		console.log('Im in addWinery factory', data);
		$http.post('/users/'+data.user_id+'/wineries', data).then(function(result){
			console.log('Inserted new winery into db', result.data);
			winery.push(result.data);
			callback(winery);
		});
	},

	factory.getAllWineries = function(userId,callback){
		console.log('getting winery list factory', userId);
		$http.get('/users/'+userId+'/wineries').then(function(wineryData){
			console.log('got winery list back from server', wineryData.data);
			callback(wineryData.data);
		});
	},

	factory.wineryInfo = function(userId, wineryId, callback){
		console.log('in winery info factory', userId, wineryId);
		$http.get('/users/'+userId+'/wineries/'+wineryId).then(function(wineryData){
			console.log('got winery back from server', wineryData.data);
			callback(wineryData.data);
		});
	},

	factory.deleteWinery = function(userId, wineryId, callback){
		console.log('delete winery factory', wineryId);
		$http.delete('/users/'+userId+'/wineries/'+wineryId).then(function(data){
			console.log('got delete response from server', data.data);
			callback(data.data);
		});
	},

	factory.updateWinery = function(userId, data, callback){
		console.log('update winery factory', userId, data);
		$http.post('/users/'+userId+'/wineries/'+data.id, data).then(function(data){
			console.log('got update winery from the server', data.data);
			callback(data.data);
		});
	}

	return factory;
})