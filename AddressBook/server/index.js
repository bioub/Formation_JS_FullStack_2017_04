const express = require('express');
const morgan = require('morgan');
const routesContact = require('./routes/contact');

const app = express();

app.use(morgan('dev'));
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
*/

app.use('/api/v1.0/contacts', routesContact);

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    error: 'Page not found'
  });
});

app.listen(8080, () => {
  console.log('Server started');
});
