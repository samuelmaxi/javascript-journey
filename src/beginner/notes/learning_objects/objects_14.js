// Objeto
// for-in objeto

const studant = {
  name: 'Jose',
  idade: 29,
  cpf: '123123123312',
  turma: 'Golang',
  phones: ['869998568', '869895538568'],
  scholarshipHolder: true,
  adresses: [{
    road: 'Number 1',
    number: '455',
    neighborhood: 'Clay Ocear',
    complement: 'house'
  },
  {
    road: 'Number 2',
    number: '45',
    neighborhood: 'Clay Ocear',
    complement: 'house'
  }]
}

for(let key in studant){
  const type = typeof studant[key]
  if(type !== 'object' && type !== 'function'){
    console.log(`a chave ${key} tem o valor ${studant[key]}`)
  }else{
    console.log(`dados ${key}: `, studant[key])
  }

}
