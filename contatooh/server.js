var http = require('http');
var app = require('./app/config/express')();

require('./app/config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'),function() {
   console.log('Express Server escutando na porta '+app.get('port')); 
});