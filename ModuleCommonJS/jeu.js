const readline = require('readline');
const random = require('./random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Jeu {
    constructor({min = 0, max = 100} = {}) {
        this._entierAlea = random.getIntInclusive(min, max);
        this._essais = [];
    }

    jouer() {
        if (this._essais.length) {
            // 5 - Utiliser les templates string
            console.log(`Précédents essais : ${this._essais.join(', ')}`);
        }

        // 4 - Utiliser une arrow function pour les callback
        rl.question('Quel est le nombre ? ', (saisie) => {

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
        });
    }
}

module.exports = Jeu;