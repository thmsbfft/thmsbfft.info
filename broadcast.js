var applescript = require('applescript');
// var socket			= require('socket.io-client')('http://localhost:3000');

// socket.on('connect', function(data) {

// 	console.log('Connected to server');

// 	// Broadcast mouse position
// 	applescript.execFile('getmousepos.scpt', function(err, rtn) {

// 		if(err) {
// 			console.log(err);
// 		}

// 		if(Array.isArray(rtn)) {
// 			console.log(rtn);
// 			socket.emit('messages', rtn);
// 		}

// 	});

// });

console.log('Gonna do smth');
applescript.execFile('getmousepos.scpt', function(err, rtn) {


	if(err) {
		console.log(err);
	}

	if(Array.isArray(rtn)) {
		console.log(rtn);
	}

	console.log(rtn);
});
console.log('Did smth');