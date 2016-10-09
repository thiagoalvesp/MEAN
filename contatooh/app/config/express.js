var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){

var app = express();

//Variaveis de ambiente
app.set('port',3000);

//Middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require('method-override')());

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
app.set('view engine','ejs');
app.set('views','./app/views');


//load
load('models',{cwd:'app'})
.then('controllers')
.then('routes')
.into(app);


return app;

};