var mysql= require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {mysql.createConnection({
    host:'localhost',
    user:'project2',
    password:'SecretPassword',
    database:'burgers_db'
});
}

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;