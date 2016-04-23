var path = require('path');
//var http = require('http').Server(app);
var bodyParser = require('body-parser');

module.exports = function (app, io, server){

	//var http = require('http').Server(app);

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname , '../public/views/index.html'));
	});

	io.on('connection', function(socket) {
		console.log('A user has connected');
		
		socket.on('chat message', function(msg){
    		console.log('message: ' + msg);
    		io.emit('chat message', msg);
  		});



		socket.on('disconnect', function() {
			console.log('A user has disconnected');
		});

	});

	server.listen(3000, function(){
		console.log('Listening on *:3000');
	});

}