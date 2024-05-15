// Arrays
// map 

const notas = [10, 9.5, 8, 7, 6];
const newNotas = []

// Primeira solucao do curso
// const novasNotas = notas.map(function (nota){
//   return nota +1
// })

// console.log(novasNotas)

// minha solucao
notas.map(nota => newNotas.push(nota + 1 >= 10 ? 10 : nota + 1))

console.log(newNotas)
console.log(notas.map(nota => newNotas.push(nota + 1 >= 10 ? 10 : nota + 1)))