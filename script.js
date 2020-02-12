
const squares = document.getElementsByClassName('square');
// Combinations
const basicCombinations = ['123', '456', '789', '147', '258', '369', '159', '753'];
const allPossibleCombinations = [];


// Other Variables
const display = document.getElementById('script-display');  // Where messages are going to be displayed
let clicksInsideBoard = 0;  // Click counter

// Create virtual board
const virtualBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]


// Count the click inside the board, so we know who's who:
const clickCounter = () => {
    clicksInsideBoard += 1;
};

// Check all winning combinations
const findCombinations = () => {
   
    // Find combinations horizontally
    virtualBoard.forEach(row => {
        let counterP1 = 0;
        let counterP2 = 0;

        row.forEach(sq => {
            (sq === 'X') ? counterP1 += 1 : false;
            (sq === 'O') ? counterP2 += 1 : false;
        })

        if (counterP1 === 3) {
            console.log('X wins')
        } else if (counterP2 === 3) {
            console.log('O wins')
        }        
    })

    // Find combinations verically
    for (let i = 0; i < virtualBoard.length; i++) {
        let counterP1 = 0;
        let counterP2 = 0;

        let col = [];

        for (let j = 0; j < virtualBoard.length; j++) {
            col.push(virtualBoard[j][i])
        }

        col.forEach(sq => {
            (sq === 'X') ? counterP1 += 1 : false;
            (sq === 'O') ? counterP2 += 1 : false;
        })
        
        if (counterP1 === 3) {
            console.log('X wins')
        } else if (counterP2 === 3) {
            console.log('O wins')
        }  
    }

    // Find combinations diagonally
    let diagonal1 = [virtualBoard[0][0], virtualBoard[1][1], virtualBoard[2][2]];
    let diagonal2 = [virtualBoard[2][0], virtualBoard[1][1], virtualBoard[0][2]];
    
} 

// Check if someone wins:
const findWinner = (playerMoves) => {
    allPossibleCombinations.forEach(n => {
        if (playerMoves.includes(n) && clicksInsideBoard % 2 === 0) {
            display.innerHTML = '<h2>Player One Wins!</h2>'
            return confetti.start();
        } else if (playerMoves.includes(n)) {
            display.innerHTML = '<h2>Player Two Wins!</h2>'
            return confetti.start();
        }
    })
}


// Draw & Locate clicks
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        let squareId = squares[i].id;
        let squareRow = squareId[squareId.length - 2]
        let squareCol = squareId[squareId.length - 1]
        
        if (clicksInsideBoard % 2 === 0 && squares[i].innerHTML === '') {
            squares[i].innerHTML = '<p>X</p>';
            clickCounter()
            // Concatinate the last character of the square's id (it's number):
            virtualBoard[squareRow][squareCol] = 'X';
            // Check if player one won:
            findCombinations()
        } else if (squares[i].innerHTML === '') {
            squares[i].innerHTML = '<p>O</p>';
            clickCounter()
            // Concatinate the last character of the square's id (it's number):
            virtualBoard[squareRow][squareCol] = 'O';
            // Check if player two won:
            findCombinations()
        }
    });
}

