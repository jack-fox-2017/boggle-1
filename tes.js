var kamus = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER']
var board = [
  ['D','G','H','I'],
  ['K','L','P','S'],
  ['Y','E','U','T'],
  ['E','O','R','N']]

class Boggle {
  constructor() {
    this.board = board
    this.kamus = kamus
    this.hasil = []
    this.x = []
    this.y = []
    this.sudahLewat = false
  }

  solve() {
    for (let i=0; i<this.kamus.length; i++) {
      let arr = []
      if (this.cariPertama(this.kamus[i].charAt(0)) == true) {
        arr.push(this.kamus[i].charAt(0))
        for (let j=1; j<this.kamus[i].length; j++) {
          // cariTetangga(this.x[0], this.y[0])

          // cek kiri atas
          if ((this.kamus[i].charAt(j) == this.board[this.x[0]-1][this.y[0]-1]) && (this.x[0]-1 >= 0 && this.y[0]-1 >= 0)) {
            for (let k=0; k<this.x.length; k++) {
              if (this.x[0]-1 == this.x[k] && this.y[0]-1 == this.y[k]) {
                this.sudahLewat = true
              }
            }
            if (this.sudahLewat == false) {
              this.x.unshift(this.x[0]-1)
              this.y.unshift(this.y[0]-1)
              arr.push(this.board[this.x[0]-1][this.y[0]-1])
            }
          }

          // cek atas
          

        }
      }
      this.x = []
      this.y = []
      if (arr.length > 0) {
        this.hasil.push(arr)
      }
    }
    return this.hasil
  }

  // cariTetangga(x,y) {
  //   for (let i=0; i<this.kamus)
  // }

  cariPertama(huruf) {
    for (let x=0; x<this.board.length; x++) {
      for (let y=0; y<this.board[x].length; y++) {
        if (huruf == this.board[x][y]) {
          this.x.unshift(x)
          this.y.unshift(y)
          // this.hasil.push(huruf)
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
// console.log(boggle.x);
// console.log(boggle.y);
// console.log(boggle.hasil);
