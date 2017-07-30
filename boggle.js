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

  printBoard(){ //bisa juga dibilang shake krn me-random huruf yg akan diisi di board
    for(let i=0; i<this.large; i++){
      let row = [];
      for(let j=0; j<this.large; j++){
        row.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
      }
      this.arrBoard.push(row);
    }
    return this.arrBoard;
  }

  nextPosition(word,index,skipPos,lastPosition){
    let row = lastPosition[0];
    let col = lastPosition[1];
    let aroundPos = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for(let j=aroundPos.length-1; j>0; j--){
      let newRow = row+aroundPos[j][0];
      let newCol = col+aroundPos[j][1];
      if(this.arrBoard[newRow]!=undefined && this.arrBoard[newRow][newCol]!=undefined && this.arrBoard[newRow][newCol]==word[index]){
        for(let s=0; s<skipPos.length; s++){
          if(skipPos[s][0]!=newRow && skipPos[s][1]!=newCol){
            skipPos.push(this.arrBoard[row]+aroundPos[j][0],this.arrBoard[row][col]+aroundPos[j][1]);
            return 1 + this.nextPosition(word, index+1,skipPos,[newRow,newCol]);
          }
          else{
            return 0;
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
            if(this.nextPosition(this.input[i],1,[lastPost],lastPost) == this.input[i].length-1){
              this.wordFound.push(this.input[i]);
            }
          }
        }
      }
    }
    for(let w=0; w<this.wordFound.length; w++){
      if(this.wordFound[w]==this.wordFound[w+1]){
        this.wordFound.splice(w,1);
      }
    }
    return this.wordFound.join(', ');
  }
}

let boo = new Boogle(5, arrData);
console.log(boo.printBoard());
console.log(boo.solve());
