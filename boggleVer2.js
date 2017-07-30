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

  checkBarisKolom(barisAwal,barisAkhir,kolomAwal,kolomAkhir) {


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

    var arrPosisiAwal = []
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

      }
    }
    console.log(arrPosisiAwal);
    console.log(arrPosisiAwal.length);


    //menemukan kata-kata
    for (var i = 0; i < arrPosisiAwal.length; i++) {
      var tempBoard = this._board
      var kolomAwal = 0
      var barisAwal = 0

      barisAwal = arrPosisiAwal[i][0] -1
      var barisAkhir = arrPosisiAwal[i][0]+1
      kolomAwal = arrPosisiAwal[i][1] -1
      var kolomAkhir = arrPosisiAwal[i][1]+1

      if (barisAwal-1 < 0){
        barisAwal=0
      }
      if (barisAkhir > this.baris) {
        barisAkhir=this.baris-1
      }

      if (kolomAwal-1 < 0){
        kolomAwal=0
      }
      if (kolomAkhir > this.baris) {
        kolomAkhir=this.baris-1
      }

      tempKata += this._board[arrPosisiAwal[i][0]][arrPosisiAwal[i][1]]
      tempBoard[arrPosisiAwal[i][0]][arrPosisiAwal[i][1]] = ' '

      for(let num = 1; num < string.length; num++){
        for(let baris = barisAwal; baris <= barisAkhir; baris++){
          for(let kolom = kolomAwal; kolom <= kolomAkhir; kolom++ ){
            if(tempBoard[baris][kolom] === string[num]){
              tempKata += tempBoard[baris][kolom]
              tempBoard[baris][kolom] = ' '

              barisAwal = baris-1
              kolomAwal = kolom-1
              barisAkhir = baris+1
              kolomAkhir = kolom+1

              if (barisAwal-1 < 0){
                barisAwal=0
              }
              if (barisAkhir > this.baris) {
                barisAkhir=this.baris-1
              }

              if (kolomAwal-1 < 0){
                kolomAwal=0
              }
              if (kolomAkhir > this.baris) {
                kolomAkhir=this.baris-1
              }

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
}


var game1 = new Boggle(5,7)
var answer = ['kata']

//console.log(game1.printBoard());
console.log(game1.solve('kata'));
// console.log(data.kamus[0]);
// console.log(`tes`);
