"use strict"
// const fs = require('fs');
// const dictData = fs.readFileSync('data.js', 'utf8')
var papan = [
  ['D', 'G', 'H', 'I'],
  ['K', 'L', 'P', 'S'],
  ['Y', 'E', 'U', 'T'],
  ['E', 'O', 'R', 'N']
];

// var dictData = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER'];
//
var dictData = ['S','U','P','E','R'];
// var dictData = ['T','U','R','N'];
// var dictData = ['T','R','I','P'];


// count the frequency of alphabet in the papan
// function countPapan(a) {
//   var m = [].concat.apply([], a);
//   var countPerWord = {};
//   for(var i = 0; i < m.length; ++i) {
//       if(!countPerWord[m[i]])
//           countPerWord[m[i]] = 0;
//           countPerWord[m[i]]++;
//   }
//   return countPerWord;
// }
//
// // count the frequency of alphabet in the dict word
// function countDictWord(a) {
//   var m = [].concat.apply([], a);
//   var countPerWord = {};
//   for(var i = 0; i < m.length; ++i) {
//       if(!countPerWord[m[i]])
//           countPerWord[m[i]] = 0;
//           countPerWord[m[i]]++;
//   }
//   return countPerWord;
// }
//
// function checkWordAvailability(arr) {
//   var freqPapan = countPapan(papan)
//   var freqDict = countDictWord(arr) // { A: 1, P: 2, L: 1, E: 1 }
//   for (let i=0; i<arr.length; i++) {
//     if(freqPapan[arr[i]] < freqDict[arr[i]])
//     return false;
//   }
//   return true;
// }

function checkPerSentence(arr) { // 's', 'i', 't'
var location = [];
var match = [];
    for (let y=0; y<papan.length; y++) {
      for (let x=0; x<papan[y].length; x++) {
        let i = 0;
        if (papan[y][x] == arr[i]) {
          location.push([y,x]);
          match.push(arr[i]);
          while (i<papan.length-1) {
            // console.log('back here');
            // console.log(i);
            // console.log('yoo this is y after roundtrip:'+y);
            // console.log('yoo this is x after roundtrip:'+x);
            // console.log('papan length: '+papan.length);
            // console.log('yoo this is y after roundtrip:'+papan[y][x+1]);
            // console.log('yoo this is x after roundtrip:'+arr[i+1]);
            if (x+1<papan.length) {
              if (papan[y][x+1] == arr[i+1]) {
                location.push([y,x+1]);
                match.push(arr[i+1]);
                y = y;
                x = x+1;
                // console.log(match);
                // console.log(i);
                i++;
              }
            }
            if (x-1>0) {
                if (papan[y][x-1] == arr[i+1]) {
                  location.push([y,x-1]);
                  match.push(arr[i+1]);
                  y = y;
                  x = x-1;
                  // console.log(location);
                  // console.log(match);
                  // console.log(y);
                  // console.log(x);
                  i++;
                }
              }
            if (y-1>0) {
                if (papan[y-1][x] == arr[i+1]) {
                  location.push([y-1,x]);
                  match.push(arr[i+1]);
                  y = y-1;
                  x = x;
                  i++;
                }
              if (x-1>0) {
                if (papan[y-1][x-1] == arr[i+1]) {
                  location.push([y-1,x-1]);
                  match.push(arr[i+1]);
                  y = y-1;
                  x = x-1;
                  i++;
                }
              }
              if (x+1<papan.length) {
                if (papan[y-1][x+1] == arr[i+1]) {
                  location.push([y-1,x+1]);
                  match.push(arr[i+1]);
                  y = y-1;
                  x = x+1;
                  i++;
                }
              }
            }
            if (y+1<papan.length) {
              // console.log('yeah');
                if (papan[y+1][x] == arr[i+1]) {
                  location.push([y+1,x]);
                  match.push(arr[i+1]);
                  y = y+1;
                  x = x;
                  i++;
                }
              if (x-1>0 && y+1<papan.length) {
                  if (papan[y+1][x-1] == arr[i+1]) {
                    location.push([y+1,x-1]);
                    match.push(arr[i+1]);
                    y = y+1;
                    x = x-1;
                    i++;
                  }
                }
              if (x+1<papan.length && y+1<papan.length) {
                if (papan[y+1][x+1] == arr[i+1]) {
                  location.push([y+1,x+1]);
                  match.push(arr[i+1]);
                  y = y+1;
                  x = x+1;
                  i++;
                }
              }
            }
        }

      }
    }
  }
  console.log(match);
  return location;
}

// console.log(checkWordAvailability(dict
console.log(checkPerSentence(dictData));


//
// function checkPerSentence() {
//
// }
//
// function finalCheck(arr) {
//   if (checkWordAvailability(arr) == true) {
//     if (checkPerSentence(arr) == true) {
//       return true;
//     }
//   } else { return false}
// }
//
// function solve(dict){
//   var result = [];
//   for (let i=0; i<dict.length; i++) {
//     var sent = dict[i].split('');
//     if (finalCheck(sent) == true){
//       result.push(sent.join(''));
//     }
//   }
//   return result;
// }

// class BoggleBoard {
//
//     constructor() {
//       // this.board = board;
//     }

    // uniqueInput(n) {
    //   var allN = n*n
    //   var text = "";
    //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //
    //   for (var i = 0; i < allN; i++)
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //
    //   return text;
    // }
    //
    // // BOGGLE 1: RELEASE 0
    // shake(n) {
    //   var papan = [];
    //   var input = this.uniqueInput(n).split('')
    //   let p =0;
    //   while ( p<input.length) {
    //     var temp = [];
    //     while (temp.length<n) {
    //       temp.push(input[p])
    //       p++;
    //     }
    //     papan.push(temp);
    //   }
    //   return papan;
    // }


// }
// var game = new BoggleBoard()
// // console.log(game.shake(5));
// console.log(game.solve());
