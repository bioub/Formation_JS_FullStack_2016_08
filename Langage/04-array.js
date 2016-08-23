
var prenoms = ['Jean', 'Eric'];
prenoms.push('Romain');
prenoms[2] = 'Marc';
prenoms[3] = 'Romain';
console.log(prenoms.length);
// console.log(prenoms[3]); // undefined

var prenoms4Char = prenoms.find(function(elt) {
    return elt.length === 6;
});

var prenoms4Char = prenoms.find((elt) => elt.length === 6);

console.log(prenoms4Char);