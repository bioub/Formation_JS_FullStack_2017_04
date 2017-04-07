const contacts = [{
    prenom: 'Jean',
    nom: 'Dupont',
    id: 123
},{
    prenom: 'Eric',
    nom: 'Martin',
    id: 987
}];

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(contacts));
});

server.listen(3000, () => {
    console.log('Server started');
});