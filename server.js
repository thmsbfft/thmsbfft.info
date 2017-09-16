var express 	= require('express');
var app 			= express();
var server		= require('http').createServer(app);
var socket		= require('socket.io')(server);

app.use(express.static('public'));

server.listen(3000, function() {
	
	console.log(':3000');

});

socket.on('connection', function(client) {

	console.log('client connected');

	client.on('join', function(data) {
		console.log(data);
		client.emit('messages', 'hello from server');
	});

	client.on('messages', function(data) {
		console.log('Broadcasting', data);
		client.broadcast.emit('broad', data);
	});

});