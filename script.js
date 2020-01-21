// Board Variables
const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const square1 = document.getElementById('square-1');
const square2 = document.getElementById('square-2');
const square3 = document.getElementById('square-3');
const square4 = document.getElementById('square-4');
const square5 = document.getElementById('square-5');
const square6 = document.getElementById('square-6');
const square7 = document.getElementById('square-7');
const square8 = document.getElementById('square-8');
const square9 = document.getElementById('square-9'); 

// Combinations
const basicCombinations = ['123', '456', '789', '147', '258', '369', '159', '753'];
const allPossibleCombinations = [];

// Other Variables
let clicksInsideBoard = 0;  // Click counter
let movesPlayer1 = '';      // Player one moves concatination 
let movesPlayer2 = '';      // Player two moves concatination


// Count the click inside the board, so we know who's who:
const clickCounter = () => {
    clicksInsideBoard += 1;
};

// Build all possible combinations array:
const findCombinations = () => {
    basicCombinations.forEach(n => {
        let a = n[0];
        let b = n[1];
        let c = n[2];
        
        allPossibleCombinations.push(
            a + b + c,
            a + c + b,
            c + b + a,
            c + a + b,
            b + a + c,
            b + c + a
        );
    })
}

// Check if someone wins:
const findWinner = (playerMoves) => {
    allPossibleCombinations.forEach(n => {
        playerMoves.includes(n) ? console.log('yes') : console.log('no');
    })
}

// Event Listeners
board.addEventListener('click', clickCounter);

// Draw & Locate clicks
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        let squareId = squares[i].id;
        
        if (clicksInsideBoard % 2 === 0) {
            squares[i].innerHTML = '<p>X</p>';
            // Concatinate the last character of the square's id (it's number):
            movesPlayer1 += squareId[squareId.length - 1];
            console.log('Moves Player One: ', movesPlayer1);
        } else {
            squares[i].innerHTML = '<p>O</p>';
            // Concatinate the last character of the square's id (it's number):
            movesPlayer2 += squareId[squareId.length - 1];
            console.log('Moves Player One: ', movesPlayer2);
        }
    });
}

// To be done as soon as the website loads
window.onload = function() {
    findCombinations();
};
