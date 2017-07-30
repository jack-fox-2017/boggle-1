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
      [ 0 , 0 ,  0 ,  0 ,  0 ,  0 ,  0 , 0 ]
      [ 0 ,'D', 'T', 'Z', 'D', 'D', 'Z', 0 ],
      [ 0 ,'M', 'G', 'J', 'B', 'J', 'U', 0 ],
      [ 0 ,'F', 'D', 'I', 'V', 'S', 'E', 0 ],
      [ 0 ,'D', 'Q', 'M', 'R', 'H', 'F', 0 ],
      [ 0 ,'Z', 'G', 'D', 'R', 'K', 'O', 0 ],
      [ 0 ,'Z', 'T', 'C', 'S', 'O', 'G', 0 ]
      [ 0 , 0 ,  0 ,  0 ,  0 ,  0 ,  0 , 0 ]
    ]
    var nemu = []

    for(var i=0;i<test.length;i++){
      for(var j=0;j<tabel.length;j++){
        for(var k=0;k<tabel[j].length;k++){

          if(test[i]==tabel[j][k]){ //jika test ke i sama dengan abjad ke j - k
            if(test[i+1]==tabel[j][k-1]){ //jika 1 huruf setelah test sama dengan abjad ke j sebelah kiri
              nemu.push([test[i]]+'-> kiri '+tabel[j][k-1])
            }
            else if(test[i+1]==tabel[j][k+1]){ //jika 1 huruf setelah test sama dengan abjad ke j sebelah kanan
              nemu.push([test[i]]+'-> kanan '+tabel[j][k+1])
            }

            else if(test[i+1]==tabel[j-1][k+1]){
              nemu.push([test[i]]+'-> kanan atas '+tabel[j-1][k+1])
            }
            else if(test[i+1]==tabel[j-1][k-1]){
              nemu.push([test[i]]+'-> kiri atas '+tabel[j-1][k-1])
            }
            else if(test[i+1]==tabel[j-1][k]){
              nemu.push([test[i]]+'-> atas '+tabel[j-1][k])
            }

            else if(test[i+1]==tabel[j+1][k-1]){
              nemu.push([test[i]]+'-> kiri bawah '+tabel[j+1][k-1])
            }
            else if(test[i+1]==tabel[j+1][k]){
              nemu.push([test[i]]+'-> bawah '+tabel[j+1][k])
            }
            else if(test[i+1]==tabel[j+1][k+1]){
              nemu.push([test[i]]+'-> kanan bawah '+tabel[j+1][k+1])
            }
          }
        }
      }
    }
    return tabel+'\n'+nemu
  }


}
var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var rowCol = 6
var abjadHuruf = new boggleBoard(abjad,rowCol)

console.log(abjadHuruf.shake())
console.log('<============ uji coba ==========>');
console.log(abjadHuruf.check('QMRVJD'));
