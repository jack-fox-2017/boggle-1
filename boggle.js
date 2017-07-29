class BoggleBoard {
  constructor() {

  }

  shake(size) {

    let board = [];
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < size; i++) {
      let boardI = [];
      for (let j = 0; j < size; j++) {
        // boardI.push(board[i][j] = alphabet.Math.floor(Math.random() * 26))
        boardI.push(alphabet[Math.floor(Math.random() * 26)])
      }
      board.push(boardI);
    }
    return board
  }
}

// var game = new BoggleBoard(5)
// var game = new BoggleBoard(4)
var game = new BoggleBoard()
console.log(game.shake(5));
