// Exercice
// 1 - Générer un entier aléatoire entre 0 et 100 (MDN Math)
// 2 - Demander et récupérer la saisie
// 3 - Indiquer si la saisi est plus petite ou plus grand
// 4 - Permettre de trouver en plusieurs essais
// 5 - Stocker les essais dans un tableaux et réafficher avec chaque tour (MDN Array)
// 6 - Rejouer si la saisie n'est pas un nombre

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jouer() {
    rl.question('What do you think of Node.js? ', function(answer) {
        // TODO: Log the answer in a database
        console.log('Thank you for your valuable feedback:', answer);

        jouer();

        // rl.close();
    });
}


