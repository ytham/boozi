var five = require('johnny-five'),
    express = require('express'),
    fs = require('fs');

var app = express.app();
var server = app.listen(8888, '0.0.0.0');
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());

