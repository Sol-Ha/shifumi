// 1. We need to explain the rules of the shifumi ( if and else)
// 2. We need a function for pc (randomize) and a display one which card the pc picked
// 3. We need a function for the gamer 
// 4. We need to have addevenlistener on elements that's interactive
// 5. We need to display score


// players' variables to be used in 'play'
let player = new Player();
let computer = new Player();
// making a variable for the pc to play
let choose = ['scissors', 'paper', 'rock'];

// shifumi's variables for player's to click on 
const scissors = document.getElementsByid('scissors')
const paper = document.getElementsByid('paper')
const rock = document.getElementById('rock')

// score's variables for shifumi player vs pc
const playerScore = document.getElementById('player_score')
const computerScore = document.getElementById('computer_score')

// making a function to factorise the choice and math random in one simple go
function choiceCard(constant,card) {
    constant.addEventListener('click', () => {
        player.cardPlayed = card;
        computer.cardPlayed = choose[Math.Random(3)];
    });
};
// choiceCard to call out in one go what's clickable
choiceCard(scissors,'scissors');
choiceCard(paper,'paper');
choiceCard(rock, 'rock');

// making the pictures usable via a click for the player
// choose with math.random

// scissors.addEventListener('click', () => {
//     player.cardPlayed = 'scissors';
//     computer.cardPlayed = choose[Math.Random(3)];

// paper.addEventListener('click', () => {
//     player.cardPlayed = 'paper';
//     computer.cardPlayed = choose[Math.Random(3)];
// })

// rock.addEventListener('click', () => {
//     player.cardPlayed = 'rock';
//     computer.cardPlayed = choose[Math.Random(3)];
// })


// shifumi's rule = play
// can use a switch to make it simple
function play() {
    if (player.cardPlayed === 'scissors' && computer.cardPlayed === 'paper') {
        return win;
    } else if (player.cardPlayed === 'scissors' && computer.cardPlayed === 'rock') {
        return lose;
    } else if (player.cardPlayed === 'paper' && computer.cardPlayed === 'rock') {
        return win;
    } else if (player.cardPlayed === 'paper' && computer.cardPlayed === 'scissors') {
        return lose;
    } else if (player.cardPlayed === 'rock' && computer.cardPlayed === 'scissors') {
        return win;
    } else if (player.cardPlayed === 'rock' && computer.cardPlayed === 'paper') {
        return lose;
    } else if (player.cardPlayed === computer.cardPlayed) {
        return tie;
    }
}

// defining what player can do here it is 1. track the score / 2. know which card has been played
//1. defining .cardPlayed will be used in the 'play' to allow players to know which cards has been played 
class Player {
    constructor() {
        this.score = 0;
        this.cardPlayed = '';
    }
}

