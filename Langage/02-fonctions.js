// Module : limite la portée des identifiants
// au fichier courant

// Module IIFE (Immediately Invoked Function Expression)
// Fonction anonyme appelée tout de suite
// Voir aussi : CommonJS, AMD, ES6
(function() {
    'use strict';


}());


(function() {
    'use strict';
    // 3 syntaxes possibles
// function declaration
    function hello() {
        console.log('Hello');
    }

    setTimeout(hello, 0);

// Anonymous Function Expression
    setTimeout(function() {
        console.log('anonyme')
    }, 0);

// Named Function Expression
    setTimeout(function bye() {
        console.log('Bye')
    }, 0);

    var addition = function(a, b) {
        return Number(a) + Number(b);
    };

    console.log(addition(1, 2));
    console.log(addition(1, '2'));
    console.log(addition('1', '2'));
    console.log(addition(1, 2, 3, 4));
    console.log(addition(1)); // NaN

    var addition = function() {
        var somme = 0;

        for (var i=0; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };

    console.log(addition(1, 2, 3, 4)); // 10

    var addition = function(a, b) {
        if (typeof a !== 'number') {
            throw new Error('a est obligatoire et de type number');
        }

        // option 1
        if (typeof b === 'undefined') {
            b = 0;
        }

        // option 2
        if (!b) {
            b = 0;
        }

        // option 3
        b = b || 0;

        return Number(a) + Number(b);
    };

    try {
        addition('1');
    }
    catch (e) {
        console.error(e.message);
    }

    console.log(addition(1)); // 1

    function externe() {

        function interne() {

            return 'interne';
        }

        return interne();
    }

// interne() // interne is not a function
    console.log(externe());

// 2 * n**2
    function addSquare(n) {

        function square() {
            // externe existe
            return n * n;
        }

        return square() + square();
    }

    console.log(addSquare(3)); // 9 + 9 = 18

    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }

    function closure(n) {
        // portée de closure = portée sauvegardée
        return function() {
            console.log(n);
        };
    }

    for (var i=0; i<3; i++) {
        setTimeout(closure(i), 100);
    }

    function powGenerator(exp) {
        return function(n) {
            return Math.pow(n, exp);
        };
    }

    var carre = powGenerator(2);
    console.log(carre(3)); // 9
    var cube = powGenerator(3);
    console.log(cube(3)); // 27
}());