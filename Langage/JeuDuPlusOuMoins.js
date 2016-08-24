'use strict';

const readline = require('readline');

class JeuDuPlusOuMoins {
    constructor(options) {
        options = options || {};
        let min = options.min || 0;
        let max = options.max || 100;
        this.$$nbAlea = Math.floor(Math.random() * (max - min)) + min;
        this.$$rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.$$essais = [];
    }
    jouer() {
        if (this.$$essais.length) {
            console.log('Vous avez déjà saisi : ' + this.$$essais.join(', '));
        }

        this.$$rl.question('Quel est le nombre ? ', (answer) => {

            let nbSaisi = parseInt(answer);

            if (Number.isNaN(nbSaisi)) {
                console.log('Erreur : Il faut saisir un nombre');
                return setImmediate(this.jouer.bind(this));
            }

            this.$$essais.push(nbSaisi);

            if (nbSaisi < this.$$nbAlea) {
                console.log('Trop petit');
                return setImmediate(this.jouer.bind(this));
            }

            if (nbSaisi > this.$$nbAlea) {
                console.log('Trop grand');
                return setImmediate(this.jouer.bind(this));
            }

            console.log('Gagné');

            this.$$rl.close();
            process.exit();
        });
    }
}

module.exports = JeuDuPlusOuMoins;