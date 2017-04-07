const Router = require('express').Router;
const bodyParser = require('body-parser');
const Contact = require('../models/contact');

const router = new Router();

// List
router.get('/', (req, res, next) => {

  Contact.find()
      .then(contacts => {
        res.json(contacts);
      })
      .catch(next);

});

// Add
router.post('/', bodyParser.json());
router.post('/', (req, res, next) => {
  let contact = new Contact(req.body);
  contact.save()
    .then(contact => {
      res.statusCode = 201;
      res.json(contact);
    })
    .catch(next);
});

// Show
router.get('/:id', (req, res, next) => {
  Contact.findById(req.params.id)
      .then(contact => {
        if (!contact) {
          return next();
        }
        res.json(contact);
      })
      .catch(next);
});

// Delete
router.delete('/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
      .then(contact => {
        if (!contact) {
          return next();
        }
        res.json(contact);
      })
      .catch(next);
});

module.exports = router;
