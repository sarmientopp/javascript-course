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

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// // user.printHobbiesBad();
// user.printHobbiesGood();

// const functionTypes = {
//     regularFunction: function () {
//         console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFuncion: () => {
//     console.log(arguments);
//      console.log('Arrow function called');
//   },

//    modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };
// functionTypes.regularFunction('Hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

//Primitive
// let age = 30;

// //Independent copy
// let oldAge = age;

// age = 31;

// console.log('age:', age);

// console.log('oldAge:', oldAge);

// //OBJECT HEAP
// //objects are stores in heap, variables hold refrerences
// const me = { name: 'Jonas', age: 30 };

// const friend = me;

// friend.age = 27;

// console.log('me:', me);
// console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };

const updatedPerson = changeAge(originalPerson, 30);

console.log('Same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';

console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

//Deep copy
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('original address:', deepOriginal.address);

console.log('copy address:', deepCopy.address);

console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

console.log('original name:', deepOriginal.name);
console.log('copy name:', deepCopy.name);
