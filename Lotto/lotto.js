var numberBox = []
var result = []
var totalNumber = 45
var pickNumeber = 6

for (var i =1; i<= totalNumber; i++){
    numberBox.push(i)
}

for (var i = 1; i <= pickNumeber; i++) {
    var index = Math.floor(Math.random() * numberBox.length);

    var num = numberBox[index];
    numberBox.splice(index, 1)

    result.push(num)
}

function compare(a, b){
    return a - b
}

result.sort(compare)

for (var i = 0; i < pickNumeber; i++){
    document.write('<span class="ball">' + result[i] + '</span>')
}

