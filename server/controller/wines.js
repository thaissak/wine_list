var con = require('../config/db.js');

function WinesController(){
  
	this.addWine = function(req,res){
		console.log(req.body);
		var wine = {user_id: req.body.user_id, name: req.body.name, year: req.body.year, variety: req.body.variety, region: req.body.region, winery: req.body.winery, vintage: req.body.vintage, color: req.body.color, grape: req.body.grape, aroma: req.body.aroma, flavor: req.body.flavor, finish: req.body.finish, acidity: req.body.acidity, tannin: req.body.tannin, fruit: req.body.fruit, body: req.body.body, sweetness: req.body.sweetness, alcohol: req.body.alcohol, score: req.body.score, comment: req.body.comment, created_at: new Date()};
		con.query('INSERT INTO wines SET ?', wine, function(err,data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('error inserting new wine', err);
				res.json({error:err});
			}
			else{
				console.log('Inserted new wine to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	},

	this.getAllWines = function(req,res){
		console.log('params:', req.params.userId)
		var myQuery = 'SELECT * FROM wines WHERE user_id='+req.params.userId;		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('no wine found', err);
				res.json({msg: "There's no wine registered"});
			}
			else{
				console.log('wines found', data);
				res.json(data);
			}
		});
	},

	this.wineInfo = function(req,res){
		console.log('params:', req.params.wineId);
		var myQuery = 'SELECT * FROM wines WHERE id = ' +req.params.wineId+ ' LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('wine not found', err);
				res.json({validation: false});
			}
			else{
				console.log('wine found', data);
				res.json(data[0]);
			}
		});
	},

	this.deleteWine = function(req,res){
		console.log('params', req.params.wineId);
		var myQuery = 'DELETE from wines WHERE id='+req.params.wineId;
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('wine not deleted', err);
				res.json({deletion: false});
			}
			else{
				console.log('wine deleted', data);
				res.json({deletion:true});
			}
		});
	},

	this.updateWine = function(req,res){
		console.log('user id:', req.params.userId, 'wine info:', req.body);
		var myQuery = 'UPDATE wines SET name = "'+req.body.name+'", year = "'+req.body.year+'", variety = "'+req.body.variety+'", region = "'+req.body.region+'", winery = "'+req.body.winery+'", vintage = "'+req.body.vintage+'", color = "'+req.body.color+'", grape = "'+req.body.grape+'", aroma = "'+req.body.aroma+'", flavor = "'+req.body.flavor+'", finish = "'+req.body.finish+'", acidity = "'+req.body.acidity+'", tannin = "'+req.body.tannin+'", fruit = "'+req.body.fruit+'", body = "'+req.body.body+'", sweetness = "'+req.body.sweetness+'", alcohol = "'+req.body.alcohol+'", score = "'+req.body.score+'", comment = "'+req.body.comment+'", updated_at = NOW() WHERE id='+req.body.id;
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('wine not updated', err);
				res.json({update: false});
			}
			else{
				console.log('wine updated', data);
				res.json({update:true});
			}
		});
	}
  
};

module.exports = new WinesController(); 
