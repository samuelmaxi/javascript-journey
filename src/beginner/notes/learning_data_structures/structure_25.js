// Arrays

function isStudent(studentName){
  const list = [['João', 'Juliana', 'Caio', 'Ana'], [10, 8, 7.5, 9]]
  if(list[0].includes(studentName)){
    const media = list[0].indexOf(studentName)
    console.log(`O aluno ${studentName} tem a media ${list[1][media]}`)
  } else{
    console.log('Pessoa nao foi encontrada')
  }
  return
}

isStudent("Juliana")