// Arrays
// map 

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const alunosMedia = [alunos, medias]

const reprovado = alunos.filter((_, index) => {
  return medias[index] < 7
})


console.log(reprovado)