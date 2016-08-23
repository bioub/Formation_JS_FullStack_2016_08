'use strict';

// 1 - Travailler avec objets existant (du langage ou de l'environnement)

console.log(typeof Math); // object
console.log(typeof console); // object

// 2 - Instancier des functions constructeurs
var now = new Date();
console.log(typeof now); // object
console.log(now.getYear()); // 116

// On peut étendre les objets
now.getYear = function() {
    return 1900 + Date.prototype.getYear.call(this);
};

console.log(now.getYear()); // 2016

// On peut accéder aux membres d'un objet
// avec des crochets
console.log('Test');
console['log']('Test');
'Test'.length;
'Test'['length'];

// 3 - Créer ses propres objets
// object literal
var coords = {
    x: 10,
    y: 5,
    z: 75
};

console.log(coords.x);
coords.z = 12; // modifier
delete coords.z; // supprimer

coords.getX = function() {
    return this.x;
};
console.log(coords.getX());

var strJSON = JSON.stringify(coords);
console.log(typeof strJSON); // string
console.log(strJSON); // string
// .... réseau ...
var coordsFromJSON = JSON.parse(strJSON);
console.log(coordsFromJSON.x);

// Itère sur les propriétés d'un objet
for (var prop in coordsFromJSON) {
    // vérifie que la propriété vienne bien d'un
    // objet et pas du prototype d'un fonction
    if (coordsFromJSON.hasOwnProperty(prop)) {
        console.log(prop); // x y
        console.log(coordsFromJSON[prop]);
    }
}

// 4 - Créer ses propres fonctions constructeurs

function Contact(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
}

var romain = new Contact('Romain', 'Bohdanowicz');
console.log(romain.prenom); // 'Romain'
console.log(romain.nom); // 'Bohdanowicz'
console.log(romain instanceof Contact); // true
console.log(romain instanceof Object); // true
console.log(romain instanceof String); // false
console.log(typeof romain); // object
console.log(typeof Contact); // function

function ContactAvecClosure(prenom, nom) {
    this.getNomComplet = function() {
        return prenom + ' ' + nom;
    };
}

var eric = new ContactAvecClosure('Eric', 'Dupont');
console.log(eric.getNomComplet());

var marc = new ContactAvecClosure('Marc', 'Durand');
console.log(marc.getNomComplet());

function ContactAvecPrototype(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
}

ContactAvecPrototype.prototype.getNomComplet = function() {
    return this.prenom + ' ' + this.nom;
};

var eric = new ContactAvecPrototype('Eric', 'Dupont');
console.log(eric.getNomComplet());

var marc = new ContactAvecPrototype('Marc', 'Durand');
console.log(marc.getNomComplet());

console.log(marc.hasOwnProperty('test')); // false
// console.log(marc.toto()); // undefined

class Voiture {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
    rouler() {
        return 'Vrooomm';
    }
}

let clio = new Voiture('Renault', 'Clio');
console.log(clio.rouler());
console.log(typeof Voiture); // function
console.log(typeof Voiture.prototype.rouler); // function

// TODO Object.create et Object.defineProperty
// TODO Héritage
// TODO Design Pattern (Options...)