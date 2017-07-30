class boggleBoard {

  constructor() {
    this.tampung = [];
    this.huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  shake(kotak) {
    for (let i = 0; i < kotak; i++) {
      this.tampung.push([]);
      for (let j = 0; j < kotak; j++) {
        this.tampung[i].push((this.huruf.charAt(Math.floor(Math.random() * this.huruf.length))))
      }
    }
    return this.tampung;
  }

  solver() {



  }




}

var huruf = new boggleBoard;
console.log(huruf.shake(4))
