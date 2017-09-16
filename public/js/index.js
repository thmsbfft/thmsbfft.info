var socket = io.connect('http://localhost:3000');

socket.on('connect', function(data) {
	socket.emit('join', 'hello from client');
});

socket.on('messages', function(data) {
	console.log('message'+ data);
});

socket.on('broad', function(data) {
	console.log('broad'+data);
});