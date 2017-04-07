const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

fs.appendFile(filePath, 'Ligne 1\n', function(err){
    const log2 = function() {
        fs.appendFile(filePath, 'Ligne 2\n', function(err){
            if (err) {
                return console.log('Erreur');
            }
            fs.appendFile(filePath, 'Ligne 3\n', function(err){
                if (err) {
                    return console.log('Erreur');
                }
                fs.appendFile(filePath, 'Ligne 4\n', function(err){
                    if (err) {
                        return console.log('Erreur');
                    }
                    fs.appendFile(filePath, 'Ligne 5\n', function(err){
                        if (err) {
                            return console.log('Erreur');
                        }
                        console.log('Log done');
                    });
                });
            });
        });
    };
    if (err) {
        return fs.mkdir(path.resolve(__dirname, 'logs'), log2)
    }
    log2();
});