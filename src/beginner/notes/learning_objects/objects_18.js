// Objeto
// iportacao de json objeto


const studant = require('./objects_17_18_json.json')

const stringStudant = JSON.stringify(studant)


// console.log(stringStudant)
console.log(stringStudant)


const objStudant = JSON.parse(stringStudant)
console.log(objStudant.nome)