let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

const nums = [numeroUm, numeroDez, numeroTrinta]
const strings = [stringUm, stringDez, stringTrinta]
const nums_strings = [nums, strings]


console.log(nums_strings)

const newarray = nums_strings.map(x => nums_strings[0] ? nums_strings[0][0] : 'true')


console.log(newarray)
// if (numeroUm !== stringUm) {
//   console.log('A variavel numeroUm e stringUm tem o mesmo valor, mas sao de tipos DIFERENTES')
// } else {
//   console.log('As variaveis numeroUm e stringUm nao tem o MESMO valor')
// }

// if (numeroTrinta === stringTrinta) {
//   console.log('As variáveis numeroTrinta e stringTrinta TEM o mesmo valor e mesmo tipo')
// } else {
//   console.log('As variáveis numeroTrinta e stringTrinta NÃO tem o mesmo tipo')
// }

// if (numeroDez !== stringDez) {
//   console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
// }