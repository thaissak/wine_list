var con = require('../config/db.js');

function UsersController(){
  
	this.addUser = function(req,res){
		var user = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password, address: req.body.address, city: req.body.city, state: req.body.state, favWine: req.body.favWine, favWinery: req.body.favWinery, created_at: new Date()};
		con.query('INSERT INTO users SET ?', user, function(err,data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('error inserting new user', err);
				res.json(err);
			}
			else{
				console.log('Inserted new user to DB:', data.insertId);
				res.json({id: data.insertId});
			}
		});
	},

	this.login = function(req,res){
		var myQuery = 'SELECT id FROM users WHERE email = "' +req.body.email+ '" AND password = "' +req.body.password+ ' "LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('login invalid', err);
				res.json({validation: false});
			}
			else{
				console.log('login ok', data);
				res.json(data);
			}
		});
	},

	this.userInfo = function(req,res){
		console.log('params:', req.params.userId);
		var myQuery = 'SELECT id, firstName, lastName, email, address, city, state, favWine, favWinery FROM users WHERE id = ' +req.params.userId+ ' LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('user not found', err);
				res.json({validation: false});
			}
			else{
				console.log('user found', data);
				res.json(data[0]);
			}
		});
	},

	this.updateUser = function(req,res){
		console.log('update user', req.body);
		var myQuery = 'UPDATE users SET firstName = "'+req.body.firstName+'", lastName = "'+req.body.lastName+'", address = "'+req.body.address+'",  city = "'+req.body.city+'", state = "'+req.body.state+'", favWine = "'+req.body.favWine+'", favWinery = "'+req.body.favWinery+'", updated_at = NOW() WHERE id='+req.body.id;
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('error updating user', err);
				res.json({update: false});
			}
			else{
				console.log('Updated user in DB:', data);
				res.json({update: true});
			}
		});
	},

	this.changePwd = function(req,res){
		console.log('change pwd controller', req.params.userId, req.body);
		var myQuery = 'UPDATE users SET password = "'+req.body.newPwd+'", updated_at = NOW() WHERE id='+req.params.userId;
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err){
				console.log('error changing password', err);
				res.json({update: false});
			}
			else{
				console.log('Changed Password in DB:', data);
				res.json({update: true});
			}
		});
	}

  
};

module.exports = new UsersController(); 


