const connection = require('./../config');
module.exports.login = function(req,res) {
    var email = req.body.email;
    var password = req.body.password;
    var sql = "SELECT * FROM registered WHERE email='"+email+"'";
    connection.query(sql, (err,rows) => {
        if(rows.length) {
            if(password == rows[0].password) {
                console.log(rows)
                res.render('logedin' , {data:rows});
            } else {
                res.end("Your password incorrent")
            }
        } else {
            res.end("user not found.")
        }
    });
}