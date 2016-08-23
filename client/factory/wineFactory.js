app.factory('wineFactory', function($http){

	var factory = {};
	var wine = [];

	factory.addWine = function(data, callback){
		console.log('Im in addWine factory', data);
		$http.post('/users/'+data.user_id+'/wines', data).then(function(result){
			console.log('Inserted new wine into db', result.data);
			wine.push(result.data);
			callback(wine);
		});
	},

	factory.getAllWines = function(userId,callback){
		console.log('getting wine list factory', userId);
		$http.get('/users/'+userId+'/wines').then(function(wineData){
			console.log('got wine list back from server', wineData.data);
			callback(wineData.data);
		});
	},

	factory.wineInfo = function(userId, wineId, callback){
		console.log('in wine info factory', userId, wineId);
		$http.get('/users/'+userId+'/wines/'+wineId).then(function(wineData){
			console.log('got wine back from server', wineData.data);
			callback(wineData.data);
		});
	},

	factory.deleteWine = function(userId, wineId, callback){
		console.log('delete wine factory', wineId);
		$http.delete('/users/'+userId+'/wines/'+wineId).then(function(data){
			console.log('got delete response from server', data.data);
			callback(data.data);
		});
	},

	factory.updateWine = function(userId, data, callback){
		console.log('update wine factory', userId, data);
		$http.post('/users/'+userId+'/wines/'+data.id, data).then(function(data){
			console.log('got update wine from the server', data.data);
			callback(data.data);
		});
	}

	return factory;
})