const express = require('express');
const app = express();

const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
    io.emit('chat message', `Message from server: ${msg}`);
        io.emit('a user connected', `From server: ${msg}`)
    })
    socket.on 

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});