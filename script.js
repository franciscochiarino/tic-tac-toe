// Board Variables
const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');

// Combinations
const basicCombinations = ['123', '456', '789', '147', '258', '369', '159', '753'];
const allPossibleCombinations = [];

// Other Variables
const display = document.getElementById('script-display');  // Where messages are going to be displayed
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
        if (playerMoves.includes(n) && clicksInsideBoard % 2 === 0) {
            display.innerHTML = '<h2>Player One Wins!</h2>'
            confetti.start();
        } else if (playerMoves.includes(n)) {
            display.innerHTML = '<h2>Player Two Wins!</h2>'
            confetti.start();
        }
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
            // Check if player one won:
            if (movesPlayer1 >= 3){
                findWinner(movesPlayer1);
            }
            console.log('Moves Player One: ', movesPlayer1);
        } else {
            squares[i].innerHTML = '<p>O</p>';
            // Concatinate the last character of the square's id (it's number):
            movesPlayer2 += squareId[squareId.length - 1];
            // Check if player two won:
            if (movesPlayer1 >= 3){
                findWinner(movesPlayer2);
            }
            console.log('Moves Player Two: ', movesPlayer2);
        }
    });
}

// To be done as soon as the website loads
window.onload = function() {
    findCombinations();
};
