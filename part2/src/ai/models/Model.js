export default class Model {
    init() {
      throw new Error(
        'Abstract method must be implemented in the derived class.'
      );
    }
    predict(entradaXs) {
      throw new Error(
        'Abstract method must be implemented in the derived class.'
      );
    }
    predictSingle(entradaX) {
      return this.predict([entradaX]);
    }
    train(entradaXs, entradasYs) {
      throw new Error(
        'Abstract method must be implemented in the derived class.'
      );
    }
    fit(entradaXs, entradaYs, contador = 100) {
      for (let i = 0; i < contador; i++) {
        this.train(entradaXs, entradaYs);
      }
    }
  }