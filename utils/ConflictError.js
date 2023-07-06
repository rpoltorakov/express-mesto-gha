class ConflictError extends Error {
  constructor() {
    super();
    this.statusCode = 409;
    this.message = 'Указанный email уже существует';
  }
}

module.exports = {
  ConflictError,
};
