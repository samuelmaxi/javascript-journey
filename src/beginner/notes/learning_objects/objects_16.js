// Objeto
// spread objeto

const studant = {
  name: 'Jose',
  age: 29,
  cpf: '123123123312',
  turma: 'Golang',
  phones: ['869998568', '869895538568'],
  scholarshipHolder: true,
  adresses: [{
    road: 'Number 1',
    number: '455',
    neighborhood: 'Clay Ocear',
    complement: 'house'
  }]
}

function diplayPhone(phone1, phone2){
  console.log(`Ligar para ${phone1}`)
  console.log(`Ligar para ${phone2}`)
}

diplayPhone(...studant.phones)

const dataSend = {
  destinatari: studant.name,
  ...studant.adresses[0]
}

console.log(dataSend)