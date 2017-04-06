const Router = require('express').Router;

const router = new Router();

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123
},{
  prenom: 'Jules',
  nom: 'Martin',
  id: 987
}];


// 1 -> Retourne la liste des contacts
// GET /api/contacts
// [{"prenom": "Jean"}...]
router.get('/', (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
  let id = Number(req.params.id);

  let contact = contacts.find(c => c.id === id);

  if (!contact) {
    return next();
  }

  res.json(contact);
});

// 3 -> Supprime un contact et le retourne
// GET /api/contacts/123/delete
// {"prenom": "Jean",...}

router.delete('/:id', (req, res, next) => {
  let id = Number(req.params.id);

  let iContact = contacts.findIndex(c => c.id === id);

  if (iContact === -1) {
    return next();
  }

  let contact = contacts.splice(iContact, 1)[0];

  res.json(contact);
});

module.exports = router;
