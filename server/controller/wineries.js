var con = require('../config/db.js');

function WineriesController(){
  
	this.addWinery = function(req,res){
		console.log(req.body);
		var winery = {name: req.body.name, region: req.body.region, user_id: 1, created_at: new Date()};
		con.query('INSERT INTO wineries SET ?', winery, function(err,data){
			if(err){
				console.log('error inserting new winery', err);
				res.json(err);
			}
			else{
				console.log('Inserting new winery to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	}
  
};

module.exports = new WineriesController(); 
