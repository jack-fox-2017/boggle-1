var kamus = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER']
var board = [
  ['D','G','H','I'],
  ['K','L','P','S'],
  ['Y','E','U','T'],
  ['E','O','R','N']
]

class Boggle {
  constructor() {
    this.board = board
    this.kamus = kamus
    this.hasil = []
    this.x = []
    this.y = []
  }

  solve() {
    for (let i=0; i<this.kamus.length; i++) {
      if (this.cariPertama(this.kamus[i].charAt(0)) == true) {
        for (let j=1; j<this.kamus[i].length; j++) {
          // cariTetangga(this.x[0], this.y[0])
        }
      }
      this.x = []
      this.y = []
    }
    return this.hasil
  }

  // cariTetangga(x,y) {
  //   for (let i=0; i<this.board.length; i++) {
  //     for (let j=0; j<this.board[i].length; j++) {
  //       for (let a=1; a<)
  //       if (this.board[x-1][y-1] == )
  //     }
  //   }
  // }

  cariPertama(huruf) {
    for (let x=0; x<this.board.length; x++) {
      for (let y=0; y<this.board[x].length; y++) {
        if (huruf == this.board[x][y]) {
          this.x.unshift(x)
          this.y.unshift(y)
          this.hasil.push(huruf)
          return true
        }
      }
    }
    return false
  }

}

var boggle = new Boggle(5,5)
console.log(boggle.kamus);
console.log(boggle.board);
// console.log(boggle.cariPertama('S'));
console.log(boggle.solve());
console.log(boggle.x);
console.log(boggle.y);
console.log(boggle.hasil);
