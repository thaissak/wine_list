var con = require('../config/db.js');

function WineriesController(){
  
	this.addWinery = function(req,res){
		console.log(req.body);
		var winery = {name: req.body.name, region: req.body.region, city: req.body.city, state: req.body.state, country: req.body.country, specialty: req.body.specialty, visited_at: req.body.visited_at, score: req.body.score, comment: req.body.comment, user_id: req.body.user_id, created_at: new Date()};
		con.query('INSERT INTO wineries SET ?', winery, function(err,data){
			if(err){
				console.log('error inserting new winery', err);
				res.json({error:err});
			}
			else{
				console.log('Inserted new winery to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	},

	this.getAllWineries = function(req,res){
		console.log('params:', req.params.userId)
		var myQuery = 'SELECT * FROM wineries WHERE user_id='+req.params.userId;		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('no winery found', err);
				res.json({msg: "There's no winery registered"});
			}
			else{
				console.log('wineries found', data);
				res.json(data);
			}
		});
	},

	this.wineryInfo = function(req,res){
		console.log('params:', req.params.wineryId);
		var myQuery = 'SELECT * FROM wineries WHERE id = ' +req.params.wineryId+ ' LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('winery not found', err);
				res.json({validation: false});
			}
			else{
				console.log('winery found', data);
				res.json(data[0]);
			}
		});
	},

	this.deleteWinery = function(req,res){
		console.log('params', req.params.wineryId);
		var myQuery = 'DELETE from wineries WHERE id='+req.params.wineryId;
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('winery not deleted', err);
				res.json({deletion: false});
			}
			else{
				console.log('winery deleted', data);
				res.json({deletion:true});
			}
		});
	},

	this.updateWinery = function(req,res){
		var winery = {name: req.body.name, region: req.body.region, city: req.body.city, state: req.body.state, country: req.body.country, specialty: req.body.specialty, visited_at: req.body.visited_at, score: req.body.score, comment: req.body.comment, user_id: req.body.user_id, updated_at: new Date()};
		con.query('UPDATE wineries SET ? WHERE id='+req.body.id, winery, function(err, data){
			if(err){
				console.log('winery not updated', err);
				res.json({update: false});
			}
			else{
				console.log('winery updated', data);
				res.json({update:true});
			}
		});
	}
  
};

module.exports = new WineriesController(); 
