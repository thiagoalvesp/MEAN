var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function (app) {

    //var app = express();

    //Variaveis de ambiente
    app.set('port', 3000);

    //Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

     //passport config
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'homen avestruz',
            resave: true,
            saveUninitialized: true
        }
    ))

    app.use(passport.initialize());
    app.use(passport.session());

    //Exemplo de Middleware
    /*app.use('/',function(req,res,next) {
        console.log('Middleware A');
        next();
    });
    app.use('/',function(req,res,next) {
        console.log('Middleware B');
        next();
    });*/

    //views 
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //load
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);

   

    return app;

};