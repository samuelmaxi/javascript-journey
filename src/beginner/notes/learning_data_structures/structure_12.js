// Arrays
export function media(notas) {
  let soma = 0
  let resul = 0

  for (let i = 0; i < notas.length; i++) {
    soma += Number(notas[i])
  }
  resul = soma / notas.length

  return `Resultado da media do aluno: ${resul}`
}

// const notas = [10, 6.5, 8, 7.5]

// console.log(media(notas))
