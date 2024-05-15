// Arrays

const alunos = [
  'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
]

alunos.slice(0, 5)

const salaA = alunos.slice(0, alunos.length / 2)
const salaB = alunos.slice(alunos.length / 2)

// console.log(alunos)  
console.log("Lista de alunos Sala A", salaA)
console.log("Lista de alunos Sala B", salaB)

console.log()
console.log(alunos.length)
