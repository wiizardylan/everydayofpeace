var PORT = process.env.PORT || 3000;
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public_sketch'));

console.log("Server is running");

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log("New connection: " + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}
