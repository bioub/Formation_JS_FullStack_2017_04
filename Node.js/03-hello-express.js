const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Home</h2>')
});

app.get('/hello.txt', (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    res.send('Hello');
});

app.get('/hello.json', (req, res) => {
    res.json({prenom: 'Romain'});
});

app.get('/redirect', (req, res) => {
    res.redirect('/');
});

/*
const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server started');
});
    */

app.listen(8080, () => {
    console.log('Server started');
});