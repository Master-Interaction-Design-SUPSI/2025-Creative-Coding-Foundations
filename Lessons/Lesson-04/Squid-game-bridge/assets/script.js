// game parameters
const PATH_LENGTH = 8;  // total steps

// game assets
const winSound = new Audio('assets/audio/win.mp3');
const failSound = new Audio('assets/audio/fail.mp3');

// game status variables
let trapsSequence = [];  // true (trap!) / false (no trap!)
let currPos = -1;  // player position on the bridge (-1: outside the path)
let scores = 0;     // player scores

// DOM elements
const scoreBoard = document.getElementById('score');
const pathContainer = document.getElementById('path-container');
const banner = document.getElementById('popup-banner');
const gameOutcome = document.getElementById('game-outcome');
const buttonCloseBanner = document.getElementById('close-banner-btn');

// event listeners

// keyboard
document.addEventListener('keydown', (keyEvent) => {
    switch(keyEvent.key) {
        case 'ArrowUp':   // up arrow key
            console.log("Jump froward!");
            currPos+=2;
            updatePlayerPosition();
            break;
        case 'ArrowRight':  // right arrow key
            console.log('Step forward!');
            currPos++;
            updatePlayerPosition();
            break;
        default:
            console.log("Key not recognised by the game!");
            break;
    }
})

// button close banner
buttonCloseBanner.addEventListener('click', () => {
    banner.className = ''; // remove all the classes
})


// logic flow

function newAttempt() {
    console.log("New attempt!");
    currPos = -1;  // move the player at the starting position
    newPath();
}

function newPath() {

    // generate new traps sequence
    let i=0;
    while(i < PATH_LENGTH) {
        if(i > 0 && trapsSequence[i-1] == true) {
            trapsSequence[i] = false;
        }
        else {
            trapsSequence[i] = Math.random() < 0.5;  // random true/false
        }
        i++;
    }

    pathContainer.innerHTML = '';  // delete all the previous traps (li elements)

    for(let i=0; i<PATH_LENGTH; i++) {      // create new traps (li elements)
        const newTile = document.createElement('li');
        newTile.dataset.trap = trapsSequence[i];
        newTile.dataset.id = i;
        pathContainer.appendChild(newTile);
    }
}

function updatePlayerPosition() {
    const allTiles = pathContainer.querySelectorAll('li');  // this returns a node list
    allTiles.forEach((tile) => {
        if(tile.dataset.id == currPos) {
            tile.classList.add('player', 'active');
        }
        else {
            tile.classList.remove('player');
        }
    })
    checkEndOfPath();
}

function checkEndOfPath() {
    // end of path?
    if(currPos < PATH_LENGTH) {  // no, still on the path
        checkForTraps();
    }
    else { // yes, end of path, you won!
        winSound.play().then(() => {
            popupOutcomeBanner("Winner", "win");
        })
        updateScore();
        newAttempt();
    }
}

function checkForTraps() {
    // on a trap?
    if(trapsSequence[currPos] == true) { // yes, on a trap
        // game over!
        failSound.play().then(() => {
            popupOutcomeBanner("Game</br>over", "fail");
        })
        newAttempt();
    }
}

function popupOutcomeBanner(message, result) {
    gameOutcome.innerHTML = message;
    banner.classList.add('active', result);
}

function updateScore() {
    scores++;
    scoreBoard.innerHTML = scores;
}

newAttempt();