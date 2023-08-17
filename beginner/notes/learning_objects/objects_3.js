// ----------------------- Object -----------------------

const people = {
  name: 'Samuel',
  age: 20,
  profession: 'Programmer'
}

const car = {
  brand: 'Ferrari',
  model: 'sport',
  year: '2003'
}


people.toPresent = `Hello, my name is ${people.name}, I'm ${people.age} years old and my profession is ${people.profession}`


// console.log(people.toPresent)

car.__proto__.toConnect = function () {
  console.log('The car is to connerct')
}

// people.toConnect()


// ----------------------- Class -----------------------

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  makeNoise(type) {
    if (type === 'dog') {
      console.log('AU AU AU AU')
    } else {
      console.log('Whats is animal?')
    }
  }
}

class Dog extends Animal {
  constructor(name, type, race) {
    super(name, type)
    this.race = race
  }
}

const myDog = new Dog('Mel', 'dog', 'chou chou')
console.log(myDog)
myDog.makeNoise(myDog.type)

// ----------------------- Encapsulation -----------------------

class BanckAccount {
  constructor(holder, balance) {
    this._holder = holder;
    this._balance = balance;
  }

  get holder() {
    return this._holder;
  }

  set holder(newHolder) {
    this._holder = newHolder;
  }

  get balance() {
    return this._balance;
  }

  set balance(_newBalance) {
    this._balance = _newBalance;
  }

  withdrawMoney(withdraw) {
    if (withdraw <= this._balance) {
      this._balance -= withdraw
      return this._balance
    } else {
      console.log('Insufficient funds. Your balance is:')
      return this._balance
    }
  }


  // withdrawMoney(withdraw) {
  //   const _newBalance = this.balance - withdraw
  //   return _newBalance
  // }

}

const user = new BanckAccount('Samuel', 1000)

user.withdrawMoney(1001)

console.log(user.balance)


// ----------------------- Polymorphism -----------------------

class GeometricForm {
  constructor(base, height, PI = 3.14, ray) {
    this.base = base;
    this.height = height;
    this.PI = PI;
    this.ray = ray
  }
}

class Rectangle extends GeometricForm {
  constructor(base, height) {
    super(base, height)
  }

  rectangleArea() {
    return this.base * this.height
  }
}

class Circle extends GeometricForm {
  constructor(ray, PI = 3.14) {
    super(undefined, undefined, PI, ray)
  }
  circleArea() {
    return this.PI * (Math.pow(this.ray, 2))
  }
}


const retangle = new Rectangle(10, 10)
const area = retangle.rectangleArea()

const cicle = new Circle(2)

console.log(cicle.circleArea())
console.log(area)


// ----------------------- Prototypes -----------------------

class Teacher {
  constructor(name, discipline) {
    this.name = name,
      this.discipline = discipline
  }

  details() {
    console.log(`My name is ${this.name}, i'm a teacher of ${this.discipline}`)
  }
}


let teacher1 = new Teacher('Samuel', 'Programming')
let teacher2 = Object.create(teacher1)

// console.log(teacher1)
// teacher1.details()


teacher2.name = 'Carla'
teacher2.discipline = 'Math'
teacher2.from = 'Rio de Janeiro'

Teacher.prototype.city = function () {
  if (this.from) {
    console.log(`I live in ${this.from} `)
  } else {
    console.log(`I live in road`)
  }
}

// console.log(teacher2)
// teacher2.city()
// teacher1.city()

// ----------------------- Factory Functions -----------------------

function createPeople(name, age, sex) {
  const people = {
    name: name,
    age: age,
    sex: sex
  }

  return people
}

let samuel = createPeople('Samuel', 20, 'male')
let user1 = createPeople('JV', 20, 'male')

console.log(typeof samuel)
console.log(typeof user1)

// ----------------------- Modules -----------------------

// const { user: user2 } = require('./objects_1')


// const samuel1 = Object.create(user2)


// console.log(samuel1)

// ----------------------- Challenge -----------------------


const list = []; // list

let task = 'go to eat' // create

const newTask = { title: task } // object 

task = 'go to sleep'
const newTask1 = { title: task }

list.push(newTask)  // add
list.push(newTask1) // add

// console.log(list)
delete list[0] // delete


list.forEach(taskItens => {
  console.log(taskItens)
})