'use strict';

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');

let dice = document.querySelector('.dice');
let btn_new = document.querySelector('.btn--new');
let btn_roll = document.querySelector('.btn--roll');
let btn_hold = document.querySelector('.btn--hold');

let scorer, currentScore, activePlayer, dice_score, current_player, gameOn;

const initilaize = () => {
  activePlayer = 0;
  currentScore = 0;
  scorer = score1;
  current_player = current1;
  gameOn = true;

  dice.classList.add('hidden');
  score1.textContent = '0';
  score2.textContent = '0';
  current1.textContent = '0';
  current2.textContent = '0';
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};

initilaize();

const switch_player = () => {
  if (gameOn) {
    currentScore = 0;
    current_player.textContent = currentScore;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    scorer = activePlayer == 0 ? score2 : score1;
    current_player = activePlayer == 0 ? current2 : current1;
    activePlayer = activePlayer == 0 ? 1 : 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
};

const finish_game = () => {
  scorer.textContent = Number(scorer.textContent) + currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  gameOn = false;
};
    // Random Number

btn_roll.addEventListener('click', function () {
  if (gameOn) {
    dice_score = Math.trunc(Math.random() * 6 + 1);
    if (dice.classList.contains('hidden')) {
      dice.classList.remove('hidden');
    }
    dice.src = `dice-${dice_score}.png`;
    if (dice_score == 1) {
      switch_player();
    } else {
      currentScore += dice_score;
      current_player.textContent = currentScore;
      if (currentScore + Number(scorer.textContent) >= 50) {
        finish_game();
      }
    }
  }
});

    // Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';
  //document.querySelector('.dice').style.display = 'block';     
btn_hold.addEventListener('click', function () {
  if (gameOn) {
    scorer.textContent = Number(scorer.textContent) + currentScore;
    switch_player();
  }
});

btn_new.addEventListener('click', function () {
  initilaize();
});


document.querySelector('.btn--hold').addEventListener('click',function(){
    if(playing){

    //Add current score to the global score
    scores[activePlayer] += roundScore; 

    //update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    //Check if the player won the game
    if(scores[activePlayer]>=50){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        //playing =false; 

    }
    else{
       //Next Player
       nextPlayer();
    }
}
    
});

function nextPlayer(){
         //Next Player

    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current--0').textContent = '0';
     document.getElementById('current--1').textContent = '0';
     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');

        // document.querySelector('.player--0').classList.remove('player--active');
        // document.querySelector('.player--1').classList.add('player--active');


    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click' , init);

function init(){
    scores= [0,0];
    roundScore = 0;
    activePlayer = 0;
    playing = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.querySelector('#name--0').textContent = 'Player 1';
document.querySelector('#name--1').textContent = 'Player 2';
document.querySelector('#name--1').textContent = 'Player 2';

//document.querySelectorAll('.player').forEach(function(player) {
 //   player.classList.remove('player--winner', 'player--active');
//});
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');


// the first player is set as active
document.querySelector('.player--0').classList.add('player--active')



}


