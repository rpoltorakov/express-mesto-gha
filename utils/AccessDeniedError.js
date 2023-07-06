class AccessDeniedError extends Error {
  constructor() {
    super();
    this.statusCode = 403;
    this.message = 'Access denied';
  }
}

module.exports = {
  AccessDeniedError,
};
