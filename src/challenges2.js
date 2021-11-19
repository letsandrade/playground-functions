// Desafio 10 ref=https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//Estava tendo problema pq inicialmente estava tentando usar o .sort diretamente na arrResultado, fui tentando debugar com console.logs e observando o repositorio de alguns colegas de turma percebi onde estava o erro.
function techList(arrTechs, name) {
  let arrResultado = [];
  if (arrTechs.length === 0) {
    return "Vazio!";
  }
  if (arrTechs.length !== 0) {
    arrTechs = arrTechs.sort(); 
    for (let i=0; i<arrTechs.length; i++) {
      arrResultado.push({tech: arrTechs[i], name: name})
    }
  }
    return arrResultado
}
//let arrTechs = ["React", "Jest", "HTML", "CSS", "JavaScript"]
//console.log(techList(arrTechs, "leticia"))

// Desafio 11
function generatePhoneNumber(arrAlgarismos) {
  if ((arrAlgarismos.length) == 11) {
    let ddd = ("(" + arrAlgarismos[0] + arrAlgarismos[1] + ")");
    console.log("ddd", ddd);
    let pt1 = [""];
    let pt2 = [""];
    for (let i=arrAlgarismos[2]; i<arrAlgarismos[7]; i++) {
      pt1.push(arrAlgarismos[i]);
    }
    for (let i2=arrAlgarismos[8]; i2<arrAlgarismos[11]; i2++) {
      pt2.push(arrAlgarismos[i2]);
    }
    console.log("pt1", pt1)
    pt1 = pt1.join("");
    pt2 = pt2.join("");

    let telefone = (ddd + " " + pt1 + "-" + pt2);
    return telefone
  } 
  
  
}
let arrAlgarismos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(arrAlgarismos))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
