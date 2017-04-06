const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write('HTTP/1.1 200 OK\r\n');
        socket.write('Content-Type: text/plain\r\n');
        socket.write('Content-Length: 11\r\n\r\n');
        socket.write('Hello World\r\n\r\n');
    });
})

server.on('listening', () => {
    console.log('Server started');
});

server.listen(1234);