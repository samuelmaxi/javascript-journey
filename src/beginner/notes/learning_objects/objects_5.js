class Pets {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }
}

class Cat extends Pets {
  constructor(raca, cor, name, idade) {
    super(name, idade);
    this.raca = raca;
    this.cor = cor;
  }
}


const gato = new Cat()

gato.name = 'xane';
gato.idade = 10
gato.cor = 'branco';
gato.raca = 'siames'

console.log(gato)