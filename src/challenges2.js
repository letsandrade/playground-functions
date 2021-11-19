// Desafio 10 ref=https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//
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
function generatePhoneNumber() {
  // seu código aqui
}

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
