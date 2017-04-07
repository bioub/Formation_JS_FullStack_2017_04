const fs = require('fs-promise');
const path = require('path');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

fs.appendFile(filePath, 'Ligne 1\n')
    .catch(() => fs.mkdir(path.resolve(__dirname, 'logs')))
    .then(() => fs.appendFile(filePath, 'Ligne 2\n'))
    .then(() => fs.appendFile(filePath, 'Ligne 3\n'))
    .then(() => fs.appendFile(filePath, 'Ligne 4\n'))
    .then(() => fs.appendFile(filePath, 'Ligne 5\n'))
    .then(() => console.log('Log done'))
    .catch((err) => console.log(err));