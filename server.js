var config = require('config');
var createApp = require('./app')
var http = require('http');
var debug = require('debug')('open-sprinkler:server');

exports.startServer = startServer;

function startServer(err, app) {

	if (err) {
		throw err;
	}

	var server = http.createServer(app);

	server.on('error', onError);
	server.on('listening', function() {
		console.log('server started on port %s', server.address().port);
	});

	server.listen(process.env.PORT || config.port);
}

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}



createApp(config, startServer);

