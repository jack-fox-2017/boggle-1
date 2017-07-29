// const fs = require('fs')
// fs.readFileSync('./data.js')
var words = require('./data.js')

class Boggle {
  constructor(baris,kolom) {
    this.board = this.printBoard(baris,kolom)
    this.kamus = words
  }

  printBoard(baris,kolom) {
    var arr = []
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i<baris; i++) {
      let arr2 = []
      for (let j=0; j<kolom; j++) {
        arr2.push(abjad.charAt(Math.floor(Math.random()*26)))
      }
      arr.push(arr2)
    }
    return arr
  }

  solve() {
    
  }

}

var boggle = new Boggle(5,5)
console.log(boggle.kamus);
console.log(boggle.board);
