const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'xenonstack'
});

connection.connect((err)=>{
    if(!err) {
        console.log("connected successfully...");
    } else {
        console.log("Error here...");
    }
});

module.exports = connection ;