// number
console.log(typeof 3); // number
console.log(typeof 3.14); // number
console.log(typeof 3.14e1); // number
console.log(typeof 0xff); // number

console.log(10 / 0); // Infinity
console.log(typeof (10 / 0)); // number
console.log(isFinite(10 / 0)); // false
console.log(Number.isFinite(10 / 0)); // false (ES6)
console.log(Math.sqrt(-1)); // NaN
console.log(isNaN(Math.sqrt(-1))); // true
console.log(Number.isNaN(Math.sqrt(-1))); // true (ES6)
console.log(typeof  Math.sqrt(-1)); // number
console.log(Number(1) + Number(undefined)); // NaN