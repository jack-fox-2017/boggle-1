'use strict'

// import variabel data
const data = require('./data');
//console.log(data);

class Boggle {
  constructor(kolom,baris) {
    this._kolom = kolom
    this._baris = baris
    this._board = []
    this._barisAwal = 0
    this._barisAkhir = 0
    this._kolomAwal = 0
    this._kolomAkhir = 0
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

    if (barisAwal-1 < 0){
      this._barisAwal=0
    }

    if (barisAkhir >= this._baris) {
      this._barisAkhir=this._baris-1
    }

    if (kolomAwal-1 < 0){
      this._kolomAwal=0
    }

    if (kolomAkhir >= this._kolom) {
      this._kolomAkhir=this._kolom-1
    }

  }

  runningWithData(arr){
    var arrData = arr
    var filterData = []
    for (var i = 0; i < arrData.length; i++) {
      if (this.solve(arrData[i].toLowerCase()) === true) {
        filterData.push(arrData[i].toLowerCase())
      }
    }
    //console.log(this._board);
    console.log(`total kata yang cocok ${filterData.length}`);
    return filterData
  }

  solve(string) {
    var arrPosisiAwal = []
    var string = string
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
    // check isi variabel
    //console.log(arrPosisiAwal);
    //console.log(arrPosisiAwal.length);


    //menemukan kata-kata
    for (var i = 0; i < arrPosisiAwal.length; i++)  {
      //console.log(this._board);
      //console.log('awal this_board');
      let tempBoard = JSON.parse(JSON.stringify(this._board))
      //console.log(tempBoard);
      //console.log('tempboard awal');
      var kolomAwal = 0
      var barisAwal = 0
      var tempKata = ''

      this._barisAwal = arrPosisiAwal[i][0] -1
      this._barisAkhir = arrPosisiAwal[i][0]+1
      this._kolomAwal = arrPosisiAwal[i][1] -1
      this._kolomAkhir = arrPosisiAwal[i][1]+1

      this.checkBarisKolom(
        this._barisAwal,
        this._barisAkhir,
        this._kolomAwal,
        this._kolomAkhir
      )

      tempKata += this._board[arrPosisiAwal[i][0]][arrPosisiAwal[i][1]]
      tempBoard[arrPosisiAwal[i][0]][arrPosisiAwal[i][1]] = '0'

      for(let num = 1; num < string.length; num++){
        for(let baris = this._barisAwal; baris <= this._barisAkhir; baris++){
          for(let kolom = this._kolomAwal; kolom <= this._kolomAkhir; kolom++ ){
            if(tempBoard[baris][kolom] === string[num]){
              tempKata += tempBoard[baris][kolom]
              tempBoard[baris][kolom] = '0'
              this._barisAwal = baris-1
              this._kolomAwal = kolom-1
              this._barisAkhir = baris+1
              this._kolomAkhir = kolom+1

              this.checkBarisKolom(
                this._barisAwal,
                this._barisAkhir,
                this._kolomAwal,
                this._kolomAkhir
              )
            }
          }
        }
      }
      if(tempKata === string) {
        return true
      }
    }
    return false
  }
}


var game1 = new Boggle(5,7)

game1.printBoard();
console.log(game1.runningWithData(data.kamus));
//console.log(game1.printBoard());
//console.log(game1.solve('kata'));
//console.log(game1.solve('muzn'));
//console.log(game1.solve('izrj'));
// console.log(data.kamus[0]);
// console.log(`tes`);
