// Arrays

const arrStudent = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const arr1 = []
const arr2 = []


for(let i=0; i<arrStudent.length;i++){
  const firstSlice = arrStudent.length /2
  if(i<firstSlice){
    arr1.push(arrStudent[i])
  }
    arr2.push(arrStudent[i])
}

console.log(arrStudent.length)
console.log("SEM SLICE")
console.log(arr1)
console.log(arr2)

console.log("COM SLICE")
console.log(arrStudent.slice(0,arrStudent.length/2))
console.log(arrStudent.slice(arrStudent.length/2))