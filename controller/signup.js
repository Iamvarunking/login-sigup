const connection = require('./../config');

module.exports.signup = function(req,res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    let sql = "INSERT INTO registered(name, email, password)VALUES('"+name+"', '"+email+"', '"+password+"')";
    connection.query(sql, (err) => {
        if(!err) {
            res.render("login")
        } else {
            console.log(err);
            res.send("Email already registered...")
        }
    });
}