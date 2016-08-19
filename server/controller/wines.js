var con = require('../config/db.js');

function WinesController(){
  
	this.addWine = function(req,res){
		console.log(req.body);
		var wine = {name: req.body.name, year: req.body.year, score: req.body.score, user_id: 1, created_at: new Date()};
		con.query('INSERT INTO wines SET ?', wine, function(err,data){
			if(err){
				console.log('error inserting new wine', err);
				res.json(err);
			}
			else{
				console.log('Inserting new wine to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	}
  
};

module.exports = new WinesController(); 
