class Boggle {
  constructor(barisKolom) {
    this.barisKolom = barisKolom
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

  cekTetangga(position) {
    let i = position[0]
    let j = position[1]

    let result = []

    if (this.board[i - 1] != undefined && this.board[j - 1] != undefined) {
      result.push({val: this.board[i - 1][j - 1], pos: [i - 1,j - 1]})
    }

    if (this.board[i - 1] != undefined && this.board[j] != undefined) {
      result.push({val: this.board[i - 1][j], pos: [i - 1,j]})
    }

    if (this.board[i - 1] != undefined && this.board[j + 1] != undefined) {
      result.push({val: this.board[i - 1][j + 1], pos: [i - 1,j + 1]})
    }

    if (this.board[i] != undefined && this.board[j - 1] != undefined) {
      result.push({val: this.board[i][j - 1], pos: [i,j - 1]})
    }

    if (this.board[i] != undefined && this.board[j + 1] != undefined) {
      result.push({val: this.board[i][j + 1], pos: [i,j + 1]})
    }

    if (this.board[i + 1] != undefined && this.board[j - 1] != undefined) {
      result.push({val: this.board[i + 1][j - 1], pos: [i + 1,j - 1]})
    }

    if (this.board[i + 1] != undefined && this.board[j] != undefined) {
      result.push({val: this.board[i + 1][j], pos: [i + 1,j]})
    }

    if (this.board[i + 1] != undefined && this.board[j + 1] != undefined) {
      result.push({val: this.board[i + 1][j + 1], pos: [i + 1,j + 1]})
    }

    return result
  }

  solve() {
    let result = []

    wordLoop:
    for (let word = 0; word < this.kamus.length; word++) {
      let process = []
      let listCoord = []
      let firstTime = true
      let check = (letterIndex) => {
        if (process[letterIndex].length > 0) {
          let position = process[letterIndex].shift().pos
          listCoord[letterIndex] = position
          let possibleSurround = this.cekTetangga(position).filter((item) => {
            let filterListCoord = listCoord.filter((item2) => {return item.pos[0] == item2[0] && item.pos[1] == item2[1]}) // mencari koordinat yang sama dengan huruf-huruf sebelumnya
            return item.val == this.kamus[word][letterIndex + 1].toUpperCase() && filterListCoord.length == 0 ? true : false
          })
          if (possibleSurround.length > 0)
            return possibleSurround
          else
            return check(letterIndex)
        } else return false
      }

      for (let letter = 0; letter < this.kamus[word].length; letter++) {
        if (letter == 0) { //first letter
          if (firstTime) {
            firstTime = false
            process.push([])
            for (let i = 0; i < this.barisKolom; i++) {
              for (let j = 0; j < this.barisKolom; j++) {
                if (this.board[i][j] == this.kamus[word][0].toUpperCase()) process[0].push({val: this.board[i][j], pos: [i,j]})
              }
            }
          }
        } else { //not first letter
          if (process.length == 0) continue wordLoop

          let checking = check(process.length - 1)
          if (checking != false) {
            process[letter] = checking
          } else {
            process.pop()
            listCoord.pop()
            letter -= 2
          }
        }
      }

      if (process.length == this.kamus[word].length) result.push(this.kamus[word])
    }

    if (result.length > 0) {
      return '\n' + result.length + ' word(s): \n' + result.join(', ')
    }
    else {
      return 'Not found!'
    }
  }

}

var boggle = new Boggle(5)
// console.log(boggle.kamus);
console.log(boggle.board);
console.log(boggle.solve());
