// Arrays

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const aluno_media = [alunos, medias]

function verifyStudent(studant) {
  for (let i = 0; i < aluno_media.length; i++) {

    if (aluno_media[i].includes(studant)) {
      const index = aluno_media[i].indexOf(studant)
      console.log(`O aluno eh ${aluno_media[0][i]} e sua media eh ${aluno_media[1][index]}`)
      break
    } return console.log("Aluno nao encontrado")

  }
}


verifyStudent("Caio")