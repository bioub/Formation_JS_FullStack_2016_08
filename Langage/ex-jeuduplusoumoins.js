// Exercice
// 1 - Générer un entier aléatoire entre 0 et 100 (MDN Math)
// 2 - Demander et récupérer la saisie
// 3 - Indiquer si la saisi est plus petite ou plus grand
// 4 - Permettre de trouver en plusieurs essais
// 5 - Stocker les essais dans un tableaux et réafficher avec chaque tour (MDN Array)
// 6 - Rejouer si la saisie n'est pas un nombre
'use strict';

const JeuDuPlusOuMoins = require('./JeuDuPlusOuMoins');

let jeu = new JeuDuPlusOuMoins();
jeu.jouer();