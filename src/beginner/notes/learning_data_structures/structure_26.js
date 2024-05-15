// Arrays

function isStudent(studentName){
  const list = [['João', 'Juliana', 'Caio', 'Ana'], [10, 8, 7.5, 9]]
  if(list[0].includes(studentName)){
    const [listStudent, listMedia] = list
    const media = listStudent.indexOf(studentName)
    console.log(`O aluno ${studentName} tem a media ${listMedia[media]}`)
  } else{
    console.log('Pessoa nao foi encontrada')
  }
  return
}

isStudent("Juliana")