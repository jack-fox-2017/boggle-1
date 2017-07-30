class Boggle{

  constructor(rowed, value){
    this.rowed = rowed
    this.value = value
  }

  shake(){
    var arrTemp = []
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for(let i=0; i<this.rowed; i++){
      var save = []
      arrTemp.push(save)
      for(let j=0; i<this.value; j++){
        let randomAlphabet = Math.floor(Math.random() * alphabet.length-1)
        arrTemp[i][j] = alphabet[randomAlphabet];
      }
    }
    return arrTemp
  }

}

var play = new Boggle(5,5)
console.log(play.shake());
