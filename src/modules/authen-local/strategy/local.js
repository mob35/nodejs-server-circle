'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
    bcrypt = require('bcrypt'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    // Use local strategy
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            User.findOne({
                email: email.toLowerCase()
            }, function (err, user) {

                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {
                        message: 'Email not found.'
                    });
                }
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result === true) {
                        return done(null, user);
                        next();
                    } else {
                        return res.status(401).send({
                            status: 401,
                            message: 'Password is invalid.'
                        });
                    }
                });
            });
        }));
};