// Arrays
// for of

const notas = [10,  6.5, 8, 7.5];

let sum =0


for (let nota of notas){
  sum+=nota
}

const media = sum/notas.length

console.log(media.toFixed(2))