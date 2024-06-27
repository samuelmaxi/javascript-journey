// Objeto
// Funcoes/metodos de objetos

const studant = {
  name: 'Jose',
  idade: 29,
  cpf: '123123123312',
  turma: 'Golang',
  phones: ['869998568', '869895538568'],
  scholarshipHolder: true,
  average: 6,
  isApproved: function(baseAverage){      //true          false
    return this.average >= baseAverage ? 'IS APPROVED' : 'Disapproved'
    
  }
}


console.log(studant.isApproved(6.5))
