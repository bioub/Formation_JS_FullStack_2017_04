const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routesContact = require('./routes/contact');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'client')))
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
*/

app.use('/api/v1.0/contacts', routesContact);

// Middleware 404
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    error: 'Page not found'
  });
});

// Middleware 500
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    error: err
  });
});

app.listen(8080, () => {
  console.log('Server started');
});
