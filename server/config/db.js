var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  database: "wine",
  user: "root",
  password: "root"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});