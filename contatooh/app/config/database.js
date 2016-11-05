var mongoose = require('mongoose');

module.exports = function (uri){
    mongoose.connect(uri,{server :{ poolSize:15}});

    mongoose.connection.on('connected',function(){
        console.log('Mongoose! Conectado em '+ uri)
    });

    mongoose.connection.on('disconnected',function(){
        console.log('Mongoose! Desconectado em '+ uri)
    });

       mongoose.connection.on('error',function(){
        console.log('Mongoose! Erro na conexão: '+ uri)
    });

    process.on('SIGINT',function(){

        mongoose.connection.close(function(){
            console.log('Mongoose! Desconectado pelo término da aplicação')
            
            process.exit(0);
        });

    });
};