let words = require('./data')

class Boggle {
  constructor(size, arr) {
    this.size = size
    this.arr = arr

    this.board = this.generateBoard()
  }

  generateBoard() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = []
    for (let i = 0; i < this.size; i++) {
      result.push([])
      for (let j = 0; j < this.size; j++) {
        result[i].push(alphabet[Math.floor(Math.random()*alphabet.length)])
      }
    }
    return result
  }

  getSurround(position) {
    let i = position[0]
    let j = position[1]

    let result = []

    if (this.board[i - 1] != undefined && this.board[j - 1] != undefined) result.push({val: this.board[i - 1][j - 1], pos: [i - 1,j - 1]})
    if (this.board[i - 1] != undefined && this.board[j] != undefined) result.push({val: this.board[i - 1][j], pos: [i - 1,j]})
    if (this.board[i - 1] != undefined && this.board[j + 1] != undefined) result.push({val: this.board[i - 1][j + 1], pos: [i - 1,j + 1]})

    if (this.board[i] != undefined && this.board[j - 1] != undefined) result.push({val: this.board[i][j - 1], pos: [i,j - 1]})
    if (this.board[i] != undefined && this.board[j + 1] != undefined) result.push({val: this.board[i][j + 1], pos: [i,j + 1]})

    if (this.board[i + 1] != undefined && this.board[j - 1] != undefined) result.push({val: this.board[i + 1][j - 1], pos: [i + 1,j - 1]})
    if (this.board[i + 1] != undefined && this.board[j] != undefined) result.push({val: this.board[i + 1][j], pos: [i + 1,j]})
    if (this.board[i + 1] != undefined && this.board[j + 1] != undefined) result.push({val: this.board[i + 1][j + 1], pos: [i + 1,j + 1]})

    return result
  }

  play() {
    let result = []

    wordLoop:
    for (let word = 0; word < this.arr.length; word++) {
      let process = []
      let listCoord = []
      let firstTime = true
      let check = (letterIndex) => {
        if (process[letterIndex].length > 0) {
          let position = process[letterIndex].shift().pos
          listCoord[letterIndex] = position
          let possibleSurround = this.getSurround(position).filter((item) => {
            let filterListCoord = listCoord.filter((item2) => {return item.pos[0] == item2[0] && item.pos[1] == item2[1]}) // mencari koordinat yang sama dengan huruf-huruf sebelumnya
            return item.val == this.arr[word][letterIndex + 1].toUpperCase() && filterListCoord.length == 0 ? true : false
          })
          if (possibleSurround.length > 0)
            return possibleSurround
          else
            return check(letterIndex)
        } else return false
      }

      for (let letter = 0; letter < this.arr[word].length; letter++) {
        if (letter == 0) { //first letter
          if (firstTime) {
            firstTime = false
            process.push([])
            for (let i = 0; i < this.size; i++) {
              for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] == this.arr[word][0].toUpperCase()) process[0].push({val: this.board[i][j], pos: [i,j]})
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

      if (process.length == this.arr[word].length) result.push(this.arr[word])
    }
    return result.join(',')
  }
}

let boggle = new Boggle(5, words)
console.log(boggle.board);
console.log(boggle.play());
