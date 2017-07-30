class boggleBoard {
  constructor() {
    this.tmp = [];
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  shake(jumlahKotak){
      for(let i=0; i < jumlahKotak; i++){
        this.tmpDlm = [];
          for(let j=0; j < jumlahKotak; j++){
            this.tmpDlm.push(this.alphabet[Math.floor(Math.random()*26)])
          }
        this.tmp.push(this.tmpDlm)
      }
    return this.tmp;
  }

}

let boggle = new boggleBoard();
console.log(boggle.shake(4));
