// Objeto
// filtrar itens json objeto 


const studants = require('./objects_20_21_22_json.json')

function filterProps(list, prop){
  return list.filter((studant)=>{
    return !studant.endereco.hasOwnProperty(prop)
  })
}


console.log(filterProps(studants, 'cep'))