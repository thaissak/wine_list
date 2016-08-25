var con = require('../config/db.js');
var bcrypt = require('bcrypt');

const saltRounds = 5;

function UsersController(){
  
	this.addUser = function(req,res){
		var myQuery = 'SELECT id FROM users WHERE email = "'+req.body.email+'"';
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(data.length == 0){
				bcrypt.hash(req.body.password, saltRounds, function(err, hash){
					var user = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: hash, address: req.body.address, city: req.body.city, state: req.body.state, favWine: req.body.favWine, favWinery: req.body.favWinery, created_at: new Date()};
					con.query('INSERT INTO users SET ?', user, function(err,addData){
						if(err){
							console.log('error inserting new user', err);
							res.json(err);
						}
						else{
							console.log('Inserted new user to DB:', addData.insertId);
							res.json({id: addData.insertId});
						}
					});
				});				
			}
			else if(data.length > 0){
				console.log('email already registered', data)
				res.json({email:true});
			}
			else{
				console.log('error looking for email', err);
				res.json({validation:false});
			}
		});
	},

	this.login = function(req,res){
		var myQuery = 'SELECT id, password FROM users WHERE email = "' +req.body.email+ '" LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('login invalid', err);
				res.json({validation: false});
			}
			else{
				bcrypt.compare(req.body.password, data[0].password, function(err,success){
					if(success){
						console.log('email and password match', data[0].id);
						res.json({id:data[0].id});
					}
					else{
						console.log('password is not a match');
						res.json({validation: false});
					}
				});
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
		var user = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, address: req.body.address, city: req.body.city, state: req.body.state, favWine: req.body.favWine, favWinery: req.body.favWinery, updated_at: new Date()};
		con.query('UPDATE users SET ? WHERE id='+req.body.id, user, function(err, data){
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
		var myQuery = 'SELECT password FROM users WHERE id = "' +req.params.userId+ '" LIMIT 1';		
		con.query(myQuery, function(err, data){
			// console.log(con.query(myQuery));
			if(err || data.length == 0){
				console.log('login invalid', err);
				res.json({userId: false});
			}
			else{
				bcrypt.compare(req.body.oldPwd, data[0].password, function(err,success){
					if(success){
						console.log('passwords match');
						bcrypt.hash(req.body.newPwd, saltRounds, function(err, hash){
							if(err){
								console.log('error hashing pwd', err);
								res.json({password:false});
							}
							else{
								var myQuery = 'UPDATE users SET password = "'+hash+'", updated_at = NOW() WHERE id='+req.params.userId;
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
						});
					}
					else{
						console.log('password is not a match');
						res.json({validation: false});
					}
				});
			}
		});	
	}

  
};

module.exports = new UsersController(); 


