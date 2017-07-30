class Boggle {
  constructor(barisKolom) {
    this.board = this.printBoard(barisKolom)
    this.kamus = require('./data.js')
  }

  printBoard(barisKolom) {
    var arr = []
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i<barisKolom; i++) {
      let arr2 = []
      for (let j=0; j<barisKolom; j++) {
        arr2.push(abjad.charAt(Math.floor(Math.random()*26)))
      }
      arr.push(arr2)
    }
    return arr
  }

  solve() {

  }

}

var boggle = new Boggle(8)
// console.log(boggle.kamus);
console.log(boggle.board);
