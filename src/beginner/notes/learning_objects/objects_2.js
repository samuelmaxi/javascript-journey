/* eslint-disable no-undef */
const readline = require('readline')

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const task = {
  title: '',
  checked: false
}

let i = 0
while (i < 5) {
  r1.question('Voce tem alguma pergunta? ', (title) => {

    if (title === 'sair') {
      r1.close();
    } else {
      let newTask = Object.create(task)
      newTask.title = { title }

      r2.question('Foi feita? ', (check) => {
        if (check === 'sair') {
          r1.close();
        } else {
          if (check.toLowerCase === 'sim') {
            newTask.check = true
          } else {
            newTask.check = false
          }

        }
      })
      for (const [tasks] in newTask) {
        console.log(`${tasks}: ${newTask[tasks]}`)
      }
    }



    r1.close();
  })

  i++
}

