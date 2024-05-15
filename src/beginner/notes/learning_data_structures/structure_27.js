// Arrays

const notas = [10, 8.5, 5, 6.5, 8, 7.5];
let sum =0
for(let i =0; i< notas.length; i++){
  sum += notas[i]
  console.log(i+": "+ notas[i])
}
console.log(sum)