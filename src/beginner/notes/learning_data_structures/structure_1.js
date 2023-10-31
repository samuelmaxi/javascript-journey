const any = [1, 2, 55, '4', '5']


const indexOfTwo = any.indexOf('4')

// console.log(indexOfTwo)
// console.log(any[indexOfTwo - 1])


const obj = {
  prop1: 'I',
  prop2: "am",
  prop3: 'student',
  method: function () {
    console.log(this.prop1, this.prop2, this.prop3, { x })
  }
}
obj.x = 'ola'

obj.method()