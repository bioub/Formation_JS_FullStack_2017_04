const express = require('express');

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123
},{
  prenom: 'Jules',
  nom: 'Martin',
  id: 987
}];

const app = express();

// 1 -> Retourne la liste des contacts
// GET /api/contacts
// [{"prenom": "Jean"}...]
app.get('/api/contacts', (req, res, next) => {
  res.json(contacts);
});

// 2 -> Retourne un seul contact
// GET /api/contacts/123
// {"prenom": "Jean",...}
// GET /api/contacts/987
// {"prenom": "Eric",...}
// GET /api/contacts/1024
// Status 404
// {"error": "Contact not found"}

app.get('/api/contacts/:id', (req, res) => {
  let id = Number(req.params.id);

  let contact = contacts.find(c => c.id === id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      error: 'Contact not found'
    });
  }

  res.json(contact);
});

// 3 -> Supprime un contact et le retourne
// GET /api/contacts/123/delete
// {"prenom": "Jean",...}

app.get('/api/contacts/:id/delete', (req, res) => {
  let id = Number(req.params.id);

  let iContact = contacts.findIndex(c => c.id === id);

  if (iContact === -1) {
    res.statusCode = 404;
    return res.json({
      error: 'Contact not found'
    });
  }

  let contact = contacts.splice(iContact, 1)[0];

  res.json(contact);
});

app.listen(8080, () => {
  console.log('Server started');
});
