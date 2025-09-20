'use strict';

console.log('Pig Game Ready!');

// game state variables
let scores, currentScore, activePlayer, playing;

//Select player 0 (player 1)
const player0El = document.querySelector('.player--0');

//Select player 1 (player 2)
const player1El = document.querySelector('.player--1');

// Select score 0 element
const score0El = document.querySelector('#score--0');

// Select score 1 element
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');

const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

// game initialization function
const init = function () {
  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;

  score0El.textContent = 0;

  score1El.textContent = 0;

  current0El.textContent = 0;

  current1El.textContent = 0;

  diceEl.classList.add('hidden');
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
