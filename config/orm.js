var connection = require("./connection.js");

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM burgers_db";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    }

    module.exports = orm;