// Objeto
// lista de objetos

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
  }]
}

studant.adresses.push({
  road: 'Number 2',
  number: '45',
  neighborhood: 'Clay Ocear',
  complement: 'house'
})
studant.adresses.push({
  road: 'Number 3',
  number: '5045',
  neighborhood: 'Clay Ocear',
  complement: 'house'
})
studant.adresses.push({
  road: 'Number 4',
  number: '64',
  neighborhood: 'Clay Ocear',
  complement: ''
})


// console.log(studant.adresses)
// console.log(studant.adresses[1].road)

const AdressListWithComplement = studant.adresses.filter((adress) => adress.complement)

console.log(AdressListWithComplement)