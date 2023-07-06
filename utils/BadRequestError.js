class BadRequestError extends Error {
  constructor() {
    super();
    this.statusCode = 400;
    this.message = 'Bad request';
  }
}

module.exports = {
  BadRequestError,
};
