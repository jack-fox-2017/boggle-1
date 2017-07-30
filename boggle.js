
let mydata = require('./data')

// console.log(data)

class boggle {
  constructor(size){
    this.size = size
    this.playBoard =[];
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ'.split('')
    // this.random= Math.floor(Math.random()*26)
  }

  printBoard(){

    var a = this.size
    for(var i =0; i< a ; i++){
      var arr= [];
      for (var j =0; j< a; j++ ){
        arr.push(this.alphabet[Math.floor(Math.random()*26)])
      }
      // return arr;
      this.playBoard.push(arr)
    }
    return this.playBoard
  }

  TopLeft(){
    var topleft = this.playBoard[0][0]
    return topleft
  }
  TopRight(){
    var end = this.size-1
    var topright = this.playBoard[0][end]
    return topright
  }
  BottomLeft(){
    var end = this.size-1
    var bottomleft = this.playBoard[end][0]
    return bottomleft
  }
  BottomRight(){
    var end = this.size-1
    var bottomright = this.playBoard[end][end]
    return bottomright
  }

  //checkboard()
  //NYERAH NYERAH
}

var start = new boggle(5);
// var c = Math.floor(Math.random()*26)
// console.log(c);
console.log(start.printBoard())
console.log(start.TopLeft());
console.log(start.TopRight());
console.log(start.BottomLeft());
console.log(start.BottomRight());
