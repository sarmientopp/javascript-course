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

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button is clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number!';
    return;
  }
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Please Enter the Number between 1 and 20!!!';
    return;
  }

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Game over!';
    document.querySelector('.guess').value = '';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You have won!';
    document.querySelectore('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too High!!!';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.querySelector('.message').textContent = 'Game over!!';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = 'Game over!!';
      document.querySelector('.guess').value = '';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
