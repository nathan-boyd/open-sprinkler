var config = require('config');
var createApp = require('./app')
var http = require('http');

function startServer(err, app){

    if(err){
        throw err;
        return;
    }

    var server = http.createServer(app, 'localhost');

    server.on('listening', function() {
        console.log('server started on port %s at %s', server.address().port, server.address().address);
    });

    server.listen(config.port);
}

createApp(config, startServer);

