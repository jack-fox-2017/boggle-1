'use strict'

// import variabel data
const data = require('./data');

// to get random num from 1 - 6


class Boggle {
  constructor(kolom,baris) {
    this._kolom = kolom
    this._baris = baris
    this._board = []
  }

  printBoard() {
    var totalString = this._kolom * this._baris
    var tempIndex = 0
    for (let baris = 0; baris < this._baris; baris++) {
      var tempArrBaris = []
      for(let kolom = 0; kolom < this._kolom; kolom++) {
        var str = String.fromCharCode(Math.floor(Math.random() * ((122-97)+1) + 97))
        tempArrBaris.push(str)
      }
      this._board.push(tempArrBaris)
    }
    console.log(this._board);
  }

  solve(string) {
    this._board =
    [ [ 'm', 'u', 'r', 'o', 'v' ],
      [ 'd', 'z', 'd', 'a', 'u' ],
      [ 't', 'n', 'k', 't', 'y' ],
      [ 'd', 'u', 'x', 'a', 'z' ],
      [ 'r', 'i', 'r', 'n', 'z' ],
      [ 'h', 'k', 'g', 'i', 'r' ],
      [ 'q', 'v', 'p', 'o', 'j' ] ]

    var tempBoard = this._board
    var arrPosisiAwal = []
    var kolomAwal = 0
    var barisAwal = 0
    var string = string
    var tempKata = ''

    //menemukan index awal
    for(let baris = 0; baris < this._baris; baris++){
      let temp = []
      temp.push(baris)
      if (this._board[baris].indexOf(string[0]) !== -1) {
        //
        temp.push(this._board[baris].indexOf(string[0]))
        arrPosisiAwal.push(temp)

        //
        barisAwal = baris
        kolomAwal = this._board[baris].indexOf(string[0])
        tempKata += this._board[barisAwal][kolomAwal]
        tempBoard[barisAwal][kolomAwal] = ' '
      }
    }
    console.log(arrPosisiAwal);
    console.log(barisAwal);
    console.log(kolomAwal);
    console.log(tempBoard);
    console.log(tempKata);

    //menemukan kata-kata
    for(let num = 1; num < string.length; num++){
      for(let baris = barisAwal-1; baris <= barisAwal+1; baris++){
        for(let kolom = kolomAwal-1; kolom <= kolomAwal+1; kolom++ ){
          if(tempBoard[baris][kolom] === string[num]){
            tempKata += tempBoard[baris][kolom]
            tempBoard[baris][kolom] = ' '
            barisAwal = baris
            kolomAwal = kolom
          }
        }
      }
    }

    console.log(tempBoard);
    console.log(tempKata);

    if(tempKata === string) {
      return true
    } else {
      return false
    }

  }
}


var game1 = new Boggle(5,7)
var answer = ['kata']

//console.log(game1.printBoard());
console.log(game1.solve('kata'));
// console.log(data.kamus[0]);
// console.log(`tes`);
