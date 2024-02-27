/*
GAME RULES:




*/

var scores, roundScore, activePlayer, playing;
init();

//console.log(dice);

//document.querySelector('#current--' + activePlayer).textContent = dice;

//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' +dice + '</em>';

//var x = document.querySelector('#score--0').textContent;
//console.log(x);


document.querySelector('.btn--roll').addEventListener('click', function(){
    
    if(playing){

    //1.Random Number
    var dice = Math.floor(Math.random()*6)+1;

    //2. Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';
    //document.querySelector('.dice').style.display = 'block';
    

    //3. Update the round score if the rolled number was not a 1
    if(dice!== 1){
        //Add Score
        roundScore+=dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;

    }
    else{
        //Next Player
        nextPlayer();
    }

    }
});


document.querySelector('.btn--hold').addEventListener('click',function(){
    if(playing){

    //Add current score to the global score
    scores[activePlayer] += roundScore; 

    //update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    //Check if the player won the game
    if(scores[activePlayer]>=20){
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
document.querySelector('#name--1').textContent = 'Player 3';

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
