// Objeto
// ordernar json objeto 


const studants = require('./objects_20_21_22_json.json')

function ordena(list, prop){
  return list.sort((a, b) => {
    if(a[prop] < b[prop]) return -1;
    if(a[prop] > b[prop]) return 1;
    return 0;
  })
}

const newList = ordena(studants, 'nome')

console.log(newList)