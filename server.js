

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.static('public_sketch'));

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