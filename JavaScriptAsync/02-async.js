const fs = require('fs');
const path = require('path');
const async = require('async');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

async.series([
    (next) => fs.appendFile(filePath, 'Ligne 1\n', next),
    (next) => fs.appendFile(filePath, 'Ligne 2\n', next),
    (next) => fs.appendFile(filePath, 'Ligne 3\n', next),
    (next) => fs.appendFile(filePath, 'Ligne 4\n', next),
    (next) => fs.appendFile(filePath, 'Ligne 5\n', next),
], (err) => {
    if (err) {
        return console.log('Erreur');
    }
    console.log('Log done');
});