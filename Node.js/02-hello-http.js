const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Home</h2>');
            break;
        case '/hello.txt':
            res.setHeader('Content-Type', 'text/plain');
            res.write('Hello');
            break;
        case '/hello.json':
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({
                prenom: 'Jean'
            }));
            break;
        case '/redirect':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Not found</h2>');
    }

    res.end();
});

server.listen(8080, () => {
    console.log('Server started');
});