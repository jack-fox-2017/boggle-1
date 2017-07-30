"use strict"

const data = require('./data');
// console.log(data.kamus[0]);
var papan2 =
[
  ['D', 'G', 'H', 'I'],
  ['K', 'L', 'P', 'S'],
  ['Y', 'E', 'U', 'T'],
  ['E', 'O', 'R', 'N']
];

// [ [ 'A', 'B', 'U', 'S' ],
//   [ 'R', 'H', 'H', 'D' ],
//   [ 'G', 'A', 'O', 'T' ],
//   [ 'H', 'A', 'H', 'T' ] ];

class BoggleBoard {

    constructor() {
      this.dictionary = data.kamus;
      this.papan = papan2;
      // this.papan = this.shake(4);
    }

    uniqueInput(n) {
      var allN = n*n
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (var i = 0; i < allN; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    // BOGGLE 1: RELEASE 0
    shake(n) {
      var papan = [];
      var input = this.uniqueInput(n).split('')
      let p =0;
      while ( p<input.length) {
        var temp = [];
        while (temp.length<n) {
          temp.push(input[p])
          p++;
        }
        papan.push(temp);
      }
      // console.log('this it it');
      // console.log(papan);
      return papan;
    }

    // count the frequency of alphabet in the papan
    countPapan(a) {
      var m = [].concat.apply([], a);
      var countPerWord = {};
      for(var i = 0; i < m.length; ++i) {
          if(!countPerWord[m[i]])
              countPerWord[m[i]] = 0;
              countPerWord[m[i]]++;
      }
      return countPerWord;
    }

    // count the frequency of alphabet in the dict word
    countDictWord(a) {
      var m = [].concat.apply([], a);
      var countPerWord = {};
      for(var i = 0; i < m.length; ++i) {
          if(!countPerWord[m[i]])
              countPerWord[m[i]] = 0;
              countPerWord[m[i]]++;
      }
      return countPerWord;
    }

    checkWordAvailability(arr) {
      // console.log(arr+'availbilty');
      var freqPapan = this.countPapan(this.papan)
      var freqDict = this.countDictWord(arr) // { A: 1, P: 2, L: 1, E: 1 }
      // console.log(freqPapan);
      // console.log(freqDict);
      for (let i=0; i<arr.length; i++) {
        // console.log('papan'+freqPapan[arr[i]]);
        // console.log('dictyoo'+freqDict[arr[i]]);
        if(freqPapan[arr[i]] < freqDict[arr[i]] || freqPapan[arr[i]] ==null){
        // console.log('papan'+freqPapan[arr[i]]);
        // console.log('dictyoo'+freqDict[arr[i]]);
        return false;
        }
      }
      return true;
    }

  
    checkPerSentence(arr) { // 's', 'i', 't'
        // console.log('loo k sni');
        var location = [];
        let papan = this.papan;
        // console.log(papan);
        // console.log('LOLOLOLO');
        var match = [];
            for (let y=0; y<papan.length; y++) {
              for (let x=0; x<papan[y].length; x++) {
                let i = 0;
                if (papan[y][x] == arr[i]) {
                  location.push([y,x]);
                  match.push(arr[i]);
                  // return location;
                  restartLoop:
                  while (i<papan.length) {

                              if (i ==(papan.length-1) && arr.length == match.length) {
                                // console.log('yess');
                                return true;
                              }
                              if (x+1<papan.length) {
                                if (papan[y][x+1] == arr[i+1]) {
                                  location.push([y,x+1]);
                                  match.push(arr[i+1]);
                                  y = y;
                                  x = x+1;
                                  i++;
                                  // console.log(i);
                                  // return location;
                                  continue restartLoop;
                                }
                              }
                              if (x-1>0) {
                                  if (papan[y][x-1] == arr[i+1]) {
                                    location.push([y,x-1]);
                                    match.push(arr[i+1]);
                                    y = y;
                                    x = x-1;
                                    i++;
                                    continue restartLoop;
                                  }
                              }
                              if (y-1>0) { //major limit
                                  if (papan[y-1][x] == arr[i+1]) {
                                    location.push([y-1,x]);
                                    match.push(arr[i+1]);
                                    y = y-1;
                                    x = x;
                                    // console.log('p ny mana');
                                    i++;
                                    continue restartLoop;
                                  }
                                if (x-1>0) {
                                  if (papan[y-1][x-1] == arr[i+1]) {
                                    location.push([y-1,x-1]);
                                    match.push(arr[i+1]);
                                    y = y-1;
                                    x = x-1;
                                    i++;
                                    continue restartLoop;
                                  }
                                }
                                if (x+1<papan.length) {
                                  if (papan[y-1][x+1] == arr[i+1]) {
                                    location.push([y-1,x+1]);
                                    match.push(arr[i+1]);
                                    y = y-1;
                                    x = x+1;
                                    i++;
                                    continue restartLoop;
                                  }
                                }
                              }
                              if (y+1<papan.length) { //major limit
                                // console.log('yeah');
                                  if (papan[y+1][x] == arr[i+1]) {
                                    location.push([y+1,x]);
                                    match.push(arr[i+1]);
                                    y = y+1;
                                    x = x;
                                    i++;
                                    // return location;
                                    continue restartLoop;
                                  }
                                if (x-1>0 && y+1<papan.length) {
                                    if (papan[y+1][x-1] == arr[i+1]) {
                                      location.push([y+1,x-1]);
                                      match.push(arr[i+1]);
                                      y = y+1;
                                      x = x-1;
                                      // return location;
                                      i++;
                                      continue restartLoop;
                                      // console.log(location);
                                      // console.log('lwaet cini');
                                    }
                                  }
                                // console.log('lwaet cini');
                                if (x+1<papan.length && y+1<papan.length) {
                                  if (papan[y+1][x+1] == arr[i+1]) {
                                    location.push([y+1,x+1]);
                                    match.push(arr[i+1]);
                                    y = y+1;
                                    x = x+1;
                                    i++;
                                    continue restartLoop;
                                  }
                                }
                              }
                              // continue restartLoop;

                              // console.log('sebelum sngaja muterin'+match);
                              // console.log('sebelum sngaja muterin'+location);
                                i++;
                               continue restartLoop;
                }
              }
            }
          }
          if (arr.length == match.length) {
            // console.log('yess end');
            return true;
          } else {return false;}
          // return location;
        }

    finalCheck(arr) {
      // console.log(arr+'final');
      if (this.checkWordAvailability(arr) == true && this.checkPerSentence(arr) == true) {
          // console.log(arr);
          return true;
      } else {
        // console.log('bener kok');
      return false
      }
    }

    solve(){
      var result = [];
      for (let i=0; i<this.dictionary.length; i++) {
        var sent = this.dictionary[i].split('');
        if (this.finalCheck(sent) == true){
          result.push(sent.join(''));
        }
      }
      return result;
    }


}

var game = new BoggleBoard()
console.log('THE BOARD: ');
console.log(game.papan);
// console.log(data.kamus);
console.log('THE RESULT: ');
console.log(game.solve());
