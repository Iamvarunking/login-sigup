const connection = require('./../config');
module.exports.contact = function(req,res) {
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var message = req.body.message;
    var sql = "INSERT INTO contact(name, email, mobile, message)VALUES('"+name+"', '"+email+"', '"+mobile+"', '"+message+"')" ;
    connection.query(sql, (err) => {
        if(!err) {
            res.end("We will contact you soon...")
        } else {
            throw err
        }
    });
}