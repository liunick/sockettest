var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var config = require('./config/config')
var io = require('socket.io')(server);

server.listen(config.port);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public/static')));

require('./routes/routes')(app, io, server);

console.log("*****************************");
console.log("* App running at port: " + config.port + " *");
console.log("*****************************");