const users = require("../models/users");

exports.signup = function (req, res, next) {
    res.render("signup");
}

exports.create_user = function (req, res, next) {
    let user = new users({
        username: req.body.username,
        password: req.body.password
    });
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

// exports.login = function (req, res, next) {
//     if (req.session.user) {

//     } else {
        
//     }
//     res.redirect("/");
// }