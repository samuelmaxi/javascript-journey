class Animal {
  constructor(especie, tipo) {
    this.especie = especie;
    this.tipo = tipo;
  }
  faz() {
    switch (this.especie) {
      case 'felino':
        console.log('mia');
        break
      case 'canino':
        console.log('late');
        break
      case 'ave':
        console.log('pia')
        break
      default:
        console.log('Faz barulhos estranho');
    }
  }
}

// COLOCAR A ESPECIE EM UM VARIAVEM QUE ARMAZENE RESTO E NAO MOSTRAR COM TERMINAL ESSA PROPS
// SO PODE MOSTRA TIPO E COR
class Cat extends Animal {
  constructor(tipo, cor) {
    // eslint-disable-next-line no-undef
    super(tipo, res);
    this.cor = cor;
  }
  faz() {
    console.log('miau');
  }
}

const xane = new Cat('mamifero', 'branco e preto')

const cao = new Animal;
cao.especie = 'canino';
cao.tipo = 'mamifero';

const passaro = new Animal('ave', 'oviparo');


console.log(xane);
console.log(typeof (xane))
console.log(cao);
console.log(passaro);

xane.faz();
cao.faz();
passaro.faz();