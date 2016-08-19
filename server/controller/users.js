var con = require('../config/db.js');

function UsersController(){
  
	this.addUser = function(req,res){
		console.log(req.body);
		var user = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password, address: req.body.address, city: req.body.city, state: req.body.state, favWine: req.body.favWine, favWinery: req.body.favWinery, created_at: new Date()};
		con.query('INSERT INTO users SET ?', user, function(err,data){
			if(err){
				console.log('error inserting new user', err);
				res.json(err);
			}
			else{
				console.log('Inserting new user to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	}
  
};

module.exports = new UsersController(); 


