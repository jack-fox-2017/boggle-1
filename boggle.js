"use strict"

let boggleBoard = () => {
  let arrBoggle = []
  let regexBoggle = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (let row = 0; row < 4; row++){

    if(row == 0){
      let col = []
      for(let i = 0; i < 4; i ++){
        let arrCol = Math.floor(Math.random() * 26)
        col.push(regexBoggle[arrCol])
      }
      arrBoggle.push(col)
    }

    else if(row == 1){
      let col1 = []
      for(let i = 0; i < 4; i++){
        let arrCol1 = Math.floor(Math.random() * 26)
        col1.push(regexBoggle[arrCol1])
      }
      arrBoggle.push(col1)
    }

    else if(row == 2){
      let col2 = []
      for(let i = 0; i < 4; i++){
        let arrCol2 = Math.floor(Math.random() * 26)
        col2.push(regexBoggle[arrCol2])
      }
      arrBoggle.push(col2)
    }

    else if(row == 3){
      let col3 = []
      for(let i = 0; i < 4; i++){
        let arrCol3 = Math.floor(Math.random() * 26)
        col3.push(regexBoggle[arrCol3])
      }
      arrBoggle.push(col3)
    }

}
  return arrBoggle

}

console.log(boggleBoard());

