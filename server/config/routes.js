module.exports = function(app){
	var users = require('../controller/users.js');
	var wines = require('../controller/wines.js');
	var wineries = require('../controller/wineries.js');

	app.post('/users', function(req,res){
		users.addUser(req,res);
	})

	app.post('/users/login', function(req,res){
		users.login(req,res);
	})

	app.get('/users/:userId', function(req,res){
		users.userInfo(req,res);
	})

	app.post('/users/:userId', function(req,res){
		users.updateUser(req,res);
	})

	app.get('/users/:userId/wines', function(req,res){
		wines.getAllWines(req,res);
	})

	app.post('/users/:userId/wines', function(req,res){
		wines.addWine(req,res);
	})

	app.get('/users/:userId/wines/:wineId', function(req,res){
		wines.wineInfo(req,res);
	})

	app.post('/users/:userId/wines/:wineId', function(req,res){
		wines.updateWine(req,res);
	})

	app.delete('/users/:userId/wines/:wineId', function(req,res){
		wines.deleteWine(req,res);
	})

	app.get('/users/:userId/wineries', function(req,res){
		wineries.getAllWineries(req,res);
	})

	app.post('/users/:userId/wineries', function(req,res){
		wineries.addWinery(req,res);
	})

	app.get('/users/:userId/wineries/:wineryId', function(req,res){
		wineries.wineryInfo(req,res);
	})

	app.post('/users/:userId/wineries/:wineryId', function(req,res){
		wineries.updateWinery(req,res);
	})

	app.delete('/users/:userId/wineries/:wineryId', function(req,res){
		wineries.deleteWinery(req,res);
	})
}