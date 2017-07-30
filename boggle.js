class boggleBoard {
  constructor(abjad,rowCol){
    this.abjad = abjad.split('')
    this.kotak = rowCol

  }

  shake(){                                                       //membuat dan mengisi setiap sell denggan huruf acak
    var arrKosong = [];
    var rc = this.kotak;
    for(var i=0; i<rc; i++){
      var kosong = []
      arrKosong.push(kosong)
      for(var idua=0; idua<rc; idua++){
        var acak = this.abjad[Math.ceil(Math.random()*26)-1]
        kosong.push(acak)

      }
    }
    return arrKosong
  }

  check(cek){
    var test = cek.split('')
    var tabel = [
      [ 'D', 'T', 'Z', 'D', 'D', 'Z' ],
      [ 'M', 'G', 'J', 'B', 'J', 'U' ],
      [ 'F', 'D', 'I', 'V', 'S', 'E' ],
      [ 'D', 'Q', 'M', 'R', 'H', 'F' ],
      [ 'Z', 'G', 'D', 'R', 'K', 'O' ],
      [ 'Z', 'T', 'C', 'S', 'O', 'G' ] ]

    for(i=0;i<test.length;i++){
      for(j=0;j<tabel.length;j++){
        for(k=0;k<tabel[j].length;k++)
      }
    }
    return test
  }


}
var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var rowCol = 6
var abjadHuruf = new boggleBoard(abjad,rowCol)

console.log(abjadHuruf.shake())
console.log(abjadHuruf.check('ap'));
