// Obejto
// acessando objetos

const studant = {
  name: "Jose",
  idade: 29,
  cpf: "123123123312",
  turma: 'Golang'
}

function diplayStudent(objStudent, infoStudent){
  return objStudent[infoStudent]
}

console.log(diplayStudent(studant, 'name'))
console.log(diplayStudent(studant, 'cpf'))