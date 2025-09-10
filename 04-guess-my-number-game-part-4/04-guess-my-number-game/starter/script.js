'use strict';

// Dom Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
//messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log('Score Elements:, scoreEl');
//scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
//numberEl.textContent = 15;

const highScoreEl = document.querySelector('.highscore');
//highScoreEl.textContent = 100;

const guessInput = document.querySelector('.guess');
//guessInput.value = 7;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');
