let arrData = require('./data')

class Boogle {
  constructor(large, input){
    this.large = large;
    this.input = input;
    this.arrBoard = [ [ 'G', 'G', 'F', 'S', 'M' ],
  [ 'M', 'O', 'T', 'O', 'Z' ],
  [ 'W', 'X', 'V', 'O', 'O' ],
  [ 'D', 'W', 'I', 'I', 'V' ],
  [ 'D', 'F', 'C', 'U', 'X' ] ]
    //this.arrBoard = [];
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.wordFound = [];
  }

  printBoard(){
    // for(let i=0; i<this.large; i++){
    //   let row = [];
    //   for(let j=0; j<this.large; j++){
    //     row.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
    //   }
    //   this.arrBoard.push(row);
    // }
    return this.arrBoard;
  }

  nextPosition(word,index,skipPos,lastPosition){
      let row = lastPosition[0];
      let col = lastPosition[1];
      let aroundPos = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
      for(let j=aroundPos.length-1; j>0; j--){
      if(this.arrBoard[row+aroundPos[j][0]]!=undefined && this.arrBoard[row+aroundPos[j][0]][col+aroundPos[j][1]]!=undefined && this.arrBoard[row+aroundPos[j][0]][col+aroundPos[j][1]]==word[index]){
        for(let s=skipPos.length-1; s>=0; s--){
          if(skipPos[s][0]!=this.arrBoard[row]+aroundPos[j][0] && skipPos[s][1]!=this.arrBoard[row][col]+aroundPos[j][1]){
            skipPos.push(this.arrBoard[row]+aroundPos[j][0],this.arrBoard[row][col]+aroundPos[j][1]);
            return 1 + this.nextPosition(word, index+1, [row+aroundPos[j][0],col+aroundPos[j][1]]);
          }
        }
      }
    }
    return 0;
  }

  solve(){
    let lastPost = [0,0];
    for(let i=0; i<this.input.length; i++){
      for(let k=0; k<this.large; k++){
        for(let l=0; l<this.large; l++){
          if(this.arrBoard[k][l].indexOf(this.input[i][0])===0){
            lastPost[0] = k;
            lastPost[1] = l;
            if(this.nextPosition(this.input[i],1,[[lastPost]],lastPost) == this.input[i].length-1){
              this.wordFound.push(this.input[i]);
            }
          }
        }
      }
    }
    return this.wordFound.join(', ');
  }
}

// let arr = ['CI','CIU','FI','FOTO','GOM','GOT','MOTO','OI','OM',
// 'OTO','SOM','SOTO','TO','TOM','TOS'];
// let arr = ['FOTO','CI'];
let boo = new Boogle(5, arrData);
console.log(boo.printBoard());
console.log(boo.solve());
//console.log(1+-2);
