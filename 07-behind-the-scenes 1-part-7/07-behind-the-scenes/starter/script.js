'use strict';

console.log(varX);
console.log(letX);
console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// //Global Execution
// console.log('Starting program');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// function outerFunction() {
//     console.log('Outer function start');
//     console.log('Outer function end');
// }

// function innerFunction() {
//     console.log('Inner function');
//     console.trace();
// }
