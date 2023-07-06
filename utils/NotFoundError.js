class NotFoundError extends Error {
  constructor() {
    super();
    this.statusCode = 404;
    this.message = 'Not found';
  }
}

module.exports = {
  NotFoundError,
};
