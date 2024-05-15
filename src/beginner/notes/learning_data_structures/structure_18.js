// Arrays

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];


const mediaAlunos = [alunos, medias]

console.log(
  `A aluna da posição 1 da lista de alunos é: ${mediaAlunos[0][2]}.
  Nota: ${mediaAlunos[1][2]}`
);