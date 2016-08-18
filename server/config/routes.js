module.exports = function(app){
	var users = require('../controller/users.js');
	// var wines = require('../controller/wines.js');
	// var wineries = require('../controller/wineries.js');

	// app.post('/user/new', function(req,res){
	// 	users.addUser(req,res);
	// })

	app.get('/user/show', function(req,res){
		users.getUser(req,res);
	})

	// app.post('/user/update', function(req,res){
	// 	users.updateUser(req,res);
	// })

	// app.get('/wines', function(req,res){
	// 	wines.getAllWines(req,res);
	// })

	// app.post('/wines/new', function(req,res){
	// 	wines.addWine(req,res);
	// })

	// app.get('/wines/show', function(req,res){
	// 	wines.getWine(req,res);
	// })

	// app.post('/wines/update', function(req,res){
	// 	wines.updateWine(req,res);
	// })

	// app.post('/wines/delete', function(req,res){
	// 	wines.deleteWine(req,res);
	// })

}