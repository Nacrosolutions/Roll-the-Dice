'use strict';




const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.getElementById('name--0');
const player1El = document.getElementById('name--1');



let activePlayer = 0;
let currentScore = 0;
const scores = [0, 0]


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')


btnRoll.addEventListener('click', () => {
  //Roll a dice
  const dice = Math.trunc(Math.random() * 6) + 1
  //Display an image
  diceEl.classList.remove('hidden')



  diceEl.src = `dice-${dice}.png`

  if (dice !== 1) {
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore += dice;
    // current`${activePlayer}`El =
    // console.log('Active player', activePlayer)
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  }
  else {
    // scores[activePlayer] = currentScore
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')


  }
  // console.log(scores)

})



btnNew.addEventListener('click', () => {

  btnRoll.disabled = false
  btnHold.classList.remove('hidden')
  diceEl.classList.add('hidden')
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
  player0El.textContent = 'Player 1'
  player1El.textContent = 'Player 2'
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  // document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]


})
btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
  if (scores[activePlayer] >= 100) {
    document.getElementById(`name--${activePlayer}`).textContent = `Player ${activePlayer + 1} wins 😘😘😘`
    btnRoll.disabled = true
    btnHold.classList.add('hidden')
    diceEl.classList.add('hidden')
  }

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

  activePlayer = activePlayer === 0 ? 1 : 0


  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')



})



