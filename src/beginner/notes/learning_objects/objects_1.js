

//Value of another variable can be included in the object
let key = 'Sam'


const user = {
  name: key,
  age: 20,
  "likes cat": true,
  speak: function () {
    console.log(`Meu nome é ${user.name}, tenho ${user.age} de idade, e meu animal favorito é gato? ${user["likes cat"]}`)
  }
}

//way to add new keys/value to an object
user.isAdmin = true
user["likes cat"] = true  //key can have separate names

//means of traversing the key values of an object
// for (const key in user) {
//   if (Object.prototype.hasOwnProperty.call(user, key)) {
//     console.log(`${key}: ${user[key]}`)
//   }
// }

delete user.age   //delete key

// console.log(user)


const admin = {}
admin.name = 'Ray'

// console.log(admin)

const samuel = Object.create(user)    // new method of create object

samuel.speak()

user.speak()