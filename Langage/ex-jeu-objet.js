const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom() {
    return Math.random();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


const Jeu = function(options) {
    options = options || {};
    const min = options.min || 0;
    const max = options.max || 100;

    this._entierAlea = getRandomIntInclusive(min, max);
    this._essais = [];
};

Jeu.prototype.jouer = function() {
    if (this._essais.length) {
        console.log('Précédents essais : ' + this._essais.join(', '));
    }

    rl.question('Quel est le nombre ? ', function answerCb(saisie) {

        const entierSaisi = Number.parseInt(saisie);

        if (Number.isNaN(entierSaisi)) {
            console.log('Erreur : il faut saisir un nombre');
            return this.jouer();
        }

        this._essais.push(entierSaisi);

        if (entierSaisi < this._entierAlea) {
            console.log('Trop petit');
            return this.jouer();
        }

        if (entierSaisi > this._entierAlea) {
            console.log('Trop grand');
            return this.jouer();
        }

        console.log('Gagné !!!');
        rl.close();
        process.exit(0);
    }.bind(this));
};

const jeu = new Jeu();

jeu.jouer();


