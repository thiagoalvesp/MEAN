var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '688842c227facae0e455',
        clientSecret: '96c2d78ab18898e857dfc3bf18849e0f0a5ebffa',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function (acessToken, refreshToken, profile, done) {

        Usuario.findOrCreate(
            { "login": profile.username },
            { "nome": profile.username },
            function (erro, usuario) {
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );

    }));

    passport.serializeUser(function(usuario,done){
        done(null,usuario._id);
    });

    passport.deserializeUser(function(id,done){
        Usuario.findById(id).exec()
        .then(function(usuario){
            done(null,usuario);
        });
    });
};