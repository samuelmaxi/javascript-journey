// Objeto
// metodos objeto

const studant = {
  name: 'Jose',
  age: 29,
  cpf: '123123123312',
  turma: 'Golang',
  phones: ['869998568', '869895538568'],
  scholarshipHolder: true,
  // adresses: [{
  //   road: 'Number 1',
  //   number: '455',
  //   neighborhood: 'Clay Ocear',
  //   complement: 'house'
  // },
  // {
  //   road: 'Number 2',
  //   number: '45',
  //   neighborhood: 'Clay Ocear',
  //   complement: 'house'
  // }]
}


const keyObject = Object.entries(studant)
console.log(keyObject)

if(!keyObject.includes('adresses')){
  console.error('Na tem um endereco cadastrado')
}