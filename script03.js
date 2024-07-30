// Game variables
let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 game board

// Winning combinations
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

// Function to handle a cell click
function cellClicked(row, col) {
    const cellIndex = row * 3 + col;
    if (gameStatus[cellIndex] === '') {
        gameStatus[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (checkDraw()) {
            document.getElementById('status').innerText = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to check for a win
function checkWin() {
    for (let combo of winningCombos) {
        if (gameStatus[combo[0]] !== '' &&
            gameStatus[combo[0]] === gameStatus[combo[1]] &&
            gameStatus[combo[1]] === gameStatus[combo[2]]) {
            return true;
        }
    }
    return false;
}

// Function to check for a draw
function checkDraw() {
    return !gameStatus.includes('');
}

// Function to reset the game
function resetGame() {
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
