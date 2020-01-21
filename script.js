// Get all the board into variables:
const board = document.getElementById('board');
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

// Try click

board.addEventListener('click', function() {
    clicksInsideBoard += 1;
    console.log(clicksInsideBoard);
})

square1.addEventListener('click', function() {
    if (clicksInsideBoard % 2 === 0) {
        square1.innerHTML = '<p>X</p>';
    } else {
        square1.innerHTML = '<p>O</p>';
    }
})