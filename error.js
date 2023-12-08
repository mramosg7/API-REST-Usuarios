class ErrorParams extends Error {
    constructor(mensaje) {
      super(mensaje);
      this.name = 'ErrorParams';
    }
  }

module.exports = {
    ErrorParams
}