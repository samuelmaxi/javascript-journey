// DIAGRAMA UML

class Occupation {
  constructor() {
    this.occupation = null
  }

  setStudant() {
    this.occupation = "studant"
  }

  setProgrammer() {
    this.occupation = "programmer"
  }
}



class People {
  constructor(name, lastname, occupation, age, address) {
    this.name = name;
    this.lastname = lastname;
    this.occupation = occupation;
    this.age = age;
    this.address = address;
  }
}

class Address {
  constructor(road, neighborhood, house_Number, country) {
    this.road = road;
    this.neighborhood = neighborhood;
    this.house_Number = house_Number;
    this.country = country;
  }
}

const occupation1 = new Occupation()
occupation1.setProgrammer()
const address1 = new Address(20, "Vale Quem tem", 6049, "Brasil")
const people1 = new People("Samuel", "Araújo", occupation1, 20, address1)

console.log(people1)