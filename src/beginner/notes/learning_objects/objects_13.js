// Objeto
// Funcoes/metodos de objetos - EXERCICIO infoPessoa.js

const pessoa = {
  nome: 'Pedro',
  idade: 20,
  solteiro: true,
  hobbires: ['Escalada']
}

pessoa.endereco = {
  rua: 'Torta',
  cidade: 'Noronha',
  estado: 'Ser Gipe'
}






function mostrarInfoPessoa(pessoa){
  console.log(pessoa)
}


mostrarInfoPessoa(pessoa)