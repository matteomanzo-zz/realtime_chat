var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response) {
	response.send('<h1>Chat!</h1>');
});

http.listen(8888, function() {
	console.log('Go on port 8888');
});