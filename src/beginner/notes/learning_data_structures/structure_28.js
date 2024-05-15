// Arrays

const notas = [10,  6.5, 8, 7.5];

let sum =0
for(let i= 0; i <notas.length; i++){
  sum += notas[i]
}

const media = sum / notas.length


console.log(media.toFixed(2))