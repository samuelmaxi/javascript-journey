const keys = document.querySelector('.operators')
const display = document.querySelector('.display__result')
const inputLeaft = document.querySelector('.input_number_left')
const inputRight = document.querySelector('.input_number_right')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const numberLeft = inputLeaft.value
    const numberRight = inputRight.value

    if (!isNaN(numberLeft) && !isNaN(numberRight)) {

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        if (action === 'add') {
          const resultado = parseInt(numberLeft) + parseInt(numberRight)
          display.textContent = resultado
        }
        else if (action === 'subtract') {
          const resultado = numberLeft - numberRight
          display.textContent = resultado
        }
        else if (action === 'multiply') {
          const resultado = numberLeft * numberRight
          display.textContent = resultado
        }
        else {
          const resultado = numberLeft / numberRight
          display.textContent = resultado
        }
      }
    }
    else {
      if (isNaN(numberLeft)) {
        alert(`Isso não é um número -->${numberLeft}<--`)
      } else if (isNaN(numberRight)) {
        alert(`Isso não é um número -->${numberRight}<--`)
      }
    }

  }
})