var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.render('index');
});

io.on('connection', function(socket) {
	console.log('a user connected');
		socket.on('chat message', function(msg) {
			console.log('message: ' + msg);
		});
    socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});

http.listen(8888, function() {
	console.log('Go on port 8888');
});