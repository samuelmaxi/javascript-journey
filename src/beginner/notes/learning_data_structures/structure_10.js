const number = [10, 20, 30, 40, 50, 60];

// const firstNumber = number[0];
// console.log(firstNumber)


const [first, second, third, ...arg] = number
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(arg)

const copyNumber = [...number]

// console.log(number)
// console.log(copyNumber)
// copyNumber[0] = 100
// console.log(copyNumber)


const people = [
  { "name": "Samuel" }, { "name": "Vitor" }
]

const peopleGallery = [...people]

peopleGallery[1].name = "Joao"

console.log(peopleGallery)

console.log(people)
