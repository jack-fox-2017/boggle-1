'use strict'

class BoogleBoard{
  constructor(){
  }

  Shake(numBoard){
    this.numBoard = numBoard
    let Kotak = []
    for (var i = 0; i < numBoard; i++) {
        Kotak.push([])
      for (var j = 0; j < numBoard; j++) {
        let random = Math.floor(Math.random()*26)
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        Kotak[i].push(alphabet[random])
      }

    }
    return Kotak
  }


  Solve(){
    let board = this.Shake(this.numBoard)//[["D","G","H","I"],['K',"L","P",'S'],['Y','E','U','T'],['E','O','R','N']]//
    let tampung = []
    let kamus = "UP"
    let indexOf = ""
    let huruf = []
    console.log(board);
    for (var k = 0; k < kamus.length; k++){
      for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
          if(kamus[k] == board[i][j]){
            if(kamus[k] != huruf[k-1]){
              tampung.push([i,j])
              huruf.push(board[i][j])
            }
          // if (kamus[1] == board[i][j]){
          //   tampung.push([i,j])
          // }
          indexOf = kamus.indexOf(kamus[0])
          }
        }
      }
    }
console.log(tampung);

// console.log(indexOf);
let kata = huruf.join('')

   if ( kata == kamus) {
     return "kata di temukan yaitu " + kata
   } else {
     return "kata tidak ada"
   }

// console.log(kata);


  //  if(kamus == board[])

  //  if(tampung.length == 0){
  //    tampung.push("Huruf tidak ada")
  //  }


    // return tampung
  }




}

let bogel = new BoogleBoard()
bogel.Shake(4);
console.log(bogel.Solve());



// 'use strict'
//
// class BoogleBoard{
//   constructor(){
//   }
//
//   Shake(numBoard){
//     this.numBoard = numBoard
//     let Kotak = []
//     for (var i = 0; i < numBoard; i++) {
//         Kotak.push([])
//       for (var j = 0; j < numBoard; j++) {
//         let random = Math.floor(Math.random()*26)
//         let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         Kotak[i].push(alphabet[random])
//       }
//
//     }
//     return Kotak
//   }
//
//
//   Solve(){
//     let board = this.Shake(this.numBoard)
//     let tampung = []
//     let kamus = "TURN"
//     let indexOf = ""
//     console.log(board);
//     for (var i = 0; i < board.length; i++) {
//       for (var j = 0; j < board.length; j++) {
//         if(kamus[0] == board[i][j]){
//           tampung.push([i,j])
//           indexOf = kamus.indexOf(kamus[0])
//         }
//       }
//     }
// console.log(indexOf);
//
//    if(tampung.length == 0){
//      tampung.push("Huruf tidak ada")
//    }
//
//
//     return tampung
//   }
//
//
//
//
// }
//
// let bogel = new BoogleBoard()
// bogel.Shake(4);
// console.log(bogel.Solve());


//------------------------------------------------
// console.log(a.indexOf(a[0])); // 0
// var a = "TURN";
// a.indexOf(7); // -1



//--------------------------------------------------
// var coba = () => {
//   arr =[]
//   for (var i = 0; i < 4; i++) {
//     for (var i = 0; i < 4 i++) {
//       arr.push[]
// }
//     }
//   }
