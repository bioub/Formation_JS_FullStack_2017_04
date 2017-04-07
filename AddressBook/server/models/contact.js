const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire']
  },
  nom: {
    type: String,
    required: [true, 'Le nom est obligatoire']
  },
  email: String,
  telephone: String
});

module.exports = Contact;
