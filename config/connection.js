var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "abcd1234",
    database: "burgers_db"
  });

  connection.connect(function(error){
    if (err) throw err;
    startConnection();
  });