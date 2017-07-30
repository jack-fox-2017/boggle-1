"use strict"

class Boggle {
  constructor(board_string) {
    this.string = board_string;
    this.board = [];

  }

  printBoard(size) {

    for(let i = 0; i < size; i++){
      this.board.push([]);
      for(let j = 0; j < size; j++){
        this.board[i].push(this.string[Math.floor(Math.random() * this.string.length)]);
      }
    }

    return this.board;
  }

  checker() {

  }


  solve() {

  }


}


var board_string =
['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var game = new Boggle(board_string)

console.log(game.printBoard(9));
//console.log(game.solve());
