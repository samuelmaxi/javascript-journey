// Objeto
// encontrar itens json objeto 


const studants = require('./objects_20_21_22_json.json')

function searchInfo(list, key, value){
  return list.find((studant) => studant[key].includes(value))
}

// console.log(searchInfo(studants, 'nome', 'Juliet'))
console.log(searchInfo(studants, 'telefone', '5'))