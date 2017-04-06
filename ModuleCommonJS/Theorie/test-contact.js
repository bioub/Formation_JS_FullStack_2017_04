const assert = require('assert');
const Contact = require('./contact');

const romain = new Contact('Romain');
assert.equal(romain.prenom, 'Romain');
