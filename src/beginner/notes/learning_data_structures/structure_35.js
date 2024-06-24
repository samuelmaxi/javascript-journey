// Arrays
// map 

const notas = [7, 7, 8, 9];

// const newList = notas.slice() <- UMA OPCAO

// spread operator
const newList = [...notas]

newList.push(21)

console.log(notas)
console.log(newList)