var mysql= require('mysql');
var connection= mysql.createConnection({
    host:'tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    user:'pnmu8m50ibwmdw0n',
    password:'pttn59h3klcayevu',
    database:'burgers_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;