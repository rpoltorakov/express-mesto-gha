class UnauthorizedError extends Error {
  constructor() {
    super();
    this.statusCode = 401;
    this.message = 'Unauthorized';
  }
}

module.exports = {
  UnauthorizedError,
};
