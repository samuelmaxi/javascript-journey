const map1 = new Map();
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)



console.log(map1.get('b'))


console.log(map1.get('c'))

map1.set('d', 97)

map1.delete('b')
console.log(map1.get('d'))
console.log(map1.size)

map1['vogal'] = ['a', 'e', 'i', 'o', 'u']

console.log(map1)