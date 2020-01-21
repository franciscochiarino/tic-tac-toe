// Get all the board into variables:
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
let clicksInsideBoard = 0;
let movesPlayer1 = '';
let movesPlayer2 = '';

// Count the click inside the board, so we know who's who:
const clickCounter = () => {
    clicksInsideBoard += 1;
};


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


