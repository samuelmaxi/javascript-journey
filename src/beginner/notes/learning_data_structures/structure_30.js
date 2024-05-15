// Arrays
// forEach 

const notas = [10,  6.5, 8, 7.5];

let media = 0

function somaNotas(nota){
  media += nota/notas.length
}

// notas.forEach((i) => media = media+=i/notas.length) // arrow function

// notas.forEach(function (nota){ // funcao anonima
//   media+=nota/notas.length
// })

notas.forEach(somaNotas)


console.log(media)