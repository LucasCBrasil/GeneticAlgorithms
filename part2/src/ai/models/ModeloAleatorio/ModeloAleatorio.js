import Model from '../Model';

export default class ModeloAleatorio extends Model {
        pesos = [];
        vies = [];

init() {
    this.aleatoriedade();
}

aleatoriedade() {
    this.pesos[0] = aleatorio();
    this.pesos[1] = aleatorio();
    this.pesos[2] = aleatorio();
    this.vies[0] = aleatorio();
}

predict(entradaXs) {
    const entradaX = entradaXs[0];
    const y =
      this.pesos[0] * entradaX[0] +
      this.pesos[1] * entradaX[1]+
      this.pesos[2] * entradaX[2] +
      this.vies[0];
    return y < 0 ? 1 : 0;
  }

getCromossomo() {
    return this.pesos.concat(this.vies);
}

setCromossomo(cromossomo) {
    this.pesos[0] = cromossomo[0];
    this.pesos[1] = cromossomo[1];
    this.pesos[2] = cromossomo[2];
    this.vies[0] = cromossomo[3];
}

}

function aleatorio() {
    return (Math.random() - 0.5) * 2;
  }