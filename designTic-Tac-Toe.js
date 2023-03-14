class TicTacToe {
    // Constructor will be used to initialize TicTacToe data members 
    constructor(n) {
        this.size = n;
        this.row = new Array(this.size).fill(0);
        this.col = new Array(this.size).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
        this.currentPlayer = undefined;
        this.isWin = false;
        this.isOver = false;
        this.maxTurns = this.size ** 2;
        this.turns = 0;
    }

    // move will be used to play a move by a specific player and identify who
    // wins at each move
    move(row, col, player) {
        // your code will replace this placeholder return statement
        if (this.currentPlayer === undefined) {
            this.currentPlayer = player;
        }
        if (this.currentPlayer !== player) {
            return;
        }
        if (this.isWin) {
            console.log("it's won");
            return;
        }
        if (this.isOver) {
            console.log("it's a draw");
            return;
        }
        this.turns += 1;
        this.row[row] += this.currentPlayer === 1 ? 1 : -1;
        if (Math.abs(this.row[row]) === this.size) {
            this.isWin = true;
            this.isOver = true;
            return this.currentPlayer;
        }
        this.col[col] += this.currentPlayer === 1 ? 1 : -1;
        if (Math.abs(this.col[col]) === this.size) {
            this.isWin = true;
            this.isOver = true;
            return this.currentPlayer;
        }
        if (row === col) {
            this.diagonal += this.currentPlayer === 1 ? 1 : -1;
            if (Math.abs(this.diagonal) === this.size) {
                this.isWin = true;
                this.isOver = true;
                return this.currentPlayer;
            }
        }
        else if (row === this.size - col - 1) {
            this.antiDiagonal += this.currentPlayer === 1 ? 1 : -1;
            if (Math.abs(this.antiDiagonal) === this.size) {
                this.isWin = true;
                this.isOver = true;
                return this.currentPlayer;
            }
        }
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        if (this.turns === this.maxTurns) {
            this.isOver = true;
        }
        return 0;
    }
}

export default TicTacToe