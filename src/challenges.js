// Desafio 1
function compareTrue(p1, p2) {
  if (p1 == true && p2 == true) {
    return true
  }
  else {
    return false
  }
};

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height)/2);
  return area
};
console.log(calcArea(10,50))

// Desafio 3 - ref: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(texto) {
  let arrPalavras = texto.split(" ");
  return arrPalavras
};
console.log(splitSentence("go trybe"))

// Desafio 4 ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
function concatName(arrNomes) {
  let strNome = (arrNomes[arrNomes.length - 1] + ", " + arrNomes[0]);
  return strNome
};
arrTest = ["foguete", "não", "tem", "ré"]
console.log(concatName(arrTest))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins*3)+(ties));
  return pontos
};


// Desafio 6 ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(arrNumeros) {
  let numOcorrencias = 0;
  let maior = (Math.max(...arrNumeros));
      for (let i = 0; i < arrNumeros.length; i++) {
        if (arrNumeros[i] == maior) {
      numOcorrencias = numOcorrencias+1
    }
  }; return numOcorrencias
}
//arrTest2 = [9, 1, 2, 3, 9, 5, 7]
//console.log(highestCount(arrTest2))

//function getMaxOfArray(arrNumeros) {
 // return Math.max.apply(null, arrNumeros);}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
