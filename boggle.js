class Boggle {
  constructor() {

  }

  shake(num) {
    var main = []

    for (var i = 0; i < num; i++) {
      var temp = []
      for (var j = 0; j < num; j++) {
        var random = Math.floor((Math.random() * 25) + 65);
        temp.push(String.fromCharCode(random))
      }
      main.push(temp)
    }
    return main
  }
}

var bugel = new Boggle()

console.log(bugel.shake(6));
