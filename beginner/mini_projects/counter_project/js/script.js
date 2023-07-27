

const btn = document.querySelector('#btn-counter')
const number = document.querySelector('#number').innerHTML

let numberCounter = number

function counter() {
  numberCounter++
  console.log(numberCounter)
  document.querySelector('#number').innerHTML = numberCounter
}
