function UsersController(){
  
  this.getUsers = function(req,res){
    con.query('SELECT * FROM users', function(err, rows){
	  if(err) throw err;
	  console.log('Data received from DB:\n');
	  console.log(rows);
	  return rows;
	});
  }
  
}

module.exports = new UsersController(); 


