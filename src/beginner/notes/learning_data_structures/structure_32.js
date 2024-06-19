// Arrays
// map 

const names = ["ana Julia", "Caio vinicius", "BIA silva"];
const defaultNamesAllUpperCase = []
const defaultNamesFirstLetter = []
console.log(names)
names.map(name =>{
  defaultNamesFirstLetter.push(name.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()))
  defaultNamesAllUpperCase.push(name.toUpperCase())
})

console.log(defaultNamesFirstLetter)
console.log(defaultNamesAllUpperCase)