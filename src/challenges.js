// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height)/2);
  return area;
}
//console.log(calcArea(10, 50))

// Desafio 3 - ref: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(texto) {
  let arrPalavras = texto.split(" ");
  return arrPalavras
}
//console.log(splitSentence("go trybe"))

// Desafio 4 ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
function concatName(arrNomes) {
  let strNome = (arrNomes[arrNomes.length - 1] + ", " + arrNomes[0]);
  return strNome
};
//let arrTest = ["foguete", "não", "tem", "ré"]
//console.log(concatName(arrTest))

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

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrNumeros2) {
  let arrResultado = [];
  for (let i = 0; i < arrNumeros2.length; i++) {
    if (arrNumeros2[i] % 3 === 0 && arrNumeros2[i] % 5 === 0) {
       arrResultado.push("fizzbuzz")
    } else if (arrNumeros2[i] % 5 === 0) {
      arrResultado.push("buzz")
    } else if (arrNumeros2[i] % 3 === 0) {
      arrResultado.push("fizz")
    } else {
      arrResultado.push("bug!")
    }
  }
  return arrResultado
}
//let arrTest3 = [2, 15, 7, 9, 45]
//console.log(fizzBuzz(arrTest3));

// Desafio 9
function encode(strP1) {
  
  let resultado = strP1.replace(/a/g, "1");
  resultado = resultado.replace(/e/g, "2");
  resultado = resultado.replace(/i/g, "3");
  resultado = resultado.replace(/o/g, "4");
  resultado = resultado.replace(/u/g, "5");

  
  return resultado
  
}
console.log(encode("hi there!"));

function decode(strp2) {
  let resultado2 = strP2.replace(/1/g, "a");
  resultado2 = resultado2.replace(/2/g, "e");
  resultado2 = resultado2.replace(/3/g, "i");
  resultado2 = resultado2.replace(/4/g, "o");
  resultado2 = resultado2.replace(/5/g, "u");

  
  return resultado2
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
