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

	app.get('/users/:id', function(req,res){
		users.userInfo(req,res);
	})

	app.post('/users/:id', function(req,res){
		users.updateUser(req,res);
	})

	// app.get('/wines', function(req,res){
	// 	wines.getAllWines(req,res);
	// })

	app.post('/wine/new', function(req,res){
		wines.addWine(req,res);
	})

	// app.get('/wine/show', function(req,res){
	// 	wines.getWine(req,res);
	// })

	// app.post('/wine/update', function(req,res){
	// 	wines.updateWine(req,res);
	// })

	// app.post('/wine/delete', function(req,res){
	// 	wines.deleteWine(req,res);
	// })

	// app.get('/wineries', function(req,res){
	// 	wines.getAllWines(req,res);
	// })

	app.post('/winery/new', function(req,res){
		wineries.addWinery(req,res);
	})

	// app.get('/winery/show', function(req,res){
	// 	wineries.getWinery(req,res);
	// })

	// app.post('/winery/update', function(req,res){
	// 	wineries.updateWinery(req,res);
	// })

	// app.post('/winery/delete', function(req,res){
	// 	wineries.deleteWinery(req,res);
	// })
}