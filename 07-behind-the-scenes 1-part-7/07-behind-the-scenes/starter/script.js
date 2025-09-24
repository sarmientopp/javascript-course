// // 'use strict';

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();

// const anotherPerson = {
//   name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// //detach function
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//     name: "Object",

//     regularMethod: function () {
//         console.log('Regular:', this.name);
//     },

//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   //Using arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout (() => {
//         console.log(`${this.name} finished modern`);

//     })
//   }
// };

// timer.start();
// timer.startModern();

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  // BROKEN: arrow function loses `this`
  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
    });
  },

  // FIXED: regular function preserves `this`
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

user.printHobbiesBad();
user.printHobbiesGood();

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDec1(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
