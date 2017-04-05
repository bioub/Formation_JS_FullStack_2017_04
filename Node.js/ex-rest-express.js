const express = require('express');

const contacts = [{
    prenom: 'Jean',
    nom: 'Dupont',
    id: 123
},{
    prenom: 'Eric',
    nom: 'Martin',
    id: 987
}];

const app = express();

// 1 -> Retourne la liste des contacts
// GET /api/contacts
// [{"prenom": "Jean"}...]

// 2 -> Retourne un seul contact
// GET /api/contacts/123
// {"prenom": "Jean",...}
// GET /api/contacts/987
// {"prenom": "Eric",...}
// GET /api/contacts/1024
// Status 404
// {"error": "Contact not found"}

app.get('/api/contacts/:id', (req, res) => {
   var id = Number(req.params.id);
   // MDN -> Array.prototype.find
});

// 3 -> Supprime un contact et le retourne
// GET /api/contacts/123/delete
// {"prenom": "Jean",...}

app.get('/api/contacts/:id/delete', (req, res) => {
    var id = Number(req.params.id);
    // MDN -> Array.prototype.findIndex
    // MDN -> Array.prototype.splice
});

app.listen(8080, () => {
    console.log('Server started');
});