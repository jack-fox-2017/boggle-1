let arrData = require('./data')

class Boogle {
  constructor(large, input){
    this.large = large;
    this.input = input;
  //   this.arrBoard = [ [ 'X', 'D', 'M', 'D', 'V' ],
  // [ 'C', 'H', 'P', 'P', 'Q' ],
  // [ 'M', 'K', 'N', 'V', 'C' ],
  // [ 'Z', 'U', 'N', 'O', 'R' ],
  // [ 'N', 'R', 'A', 'E', 'T' ] ];
    this.arrBoard = [];
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.wordFound = [];
  }

  printBoard(){
    for(let i=0; i<this.large; i++){
      let row = [];
      for(let j=0; j<this.large; j++){
        row.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
      }
      this.arrBoard.push(row);
    }
    return this.arrBoard;
  }

  nextPosition(word,index,lastPosition){
    let row = lastPosition[0];
    let col = lastPosition[1];
    let aroundPos = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    //let count = 0;
    for(let j=0; j<aroundPos.length; j++){
      if(this.arrBoard[row+aroundPos[j][0]]!=undefined && this.arrBoard[row+aroundPos[j][0]][col+aroundPos[j][1]]!=undefined && this.arrBoard[row+aroundPos[j][0]][col+aroundPos[j][1]]==word[index]){
        return 1 + this.nextPosition(word, index+1, [row+aroundPos[j][0],col+aroundPos[j][1]]);
      }
      // else{
      //   return 0 + this.nextPosition(word, index, [row,col]);
      // }
    }
    return 0;
  }

  solve(){
    let lastPost = [0,0];
    //let nextPost = [];
    for(let i=0; i<this.input.length; i++){
      for(let k=0; k<this.large; k++){
        for(let l=0; l<this.large; l++){
          if(this.arrBoard[k][l].indexOf(this.input[i][0])===0){
            lastPost[0] = k;
            lastPost[1] = l;
            if(this.nextPosition(this.input[i],1,lastPost) == this.input[i].length-1){
              this.wordFound.push(this.input[i]);
            }
          }
        }
      }
    }
    return this.wordFound;
  }
}
let boo = new Boogle(5, arrData);
console.log(boo.printBoard());
console.log(boo.solve());
//console.log(1+-2);
