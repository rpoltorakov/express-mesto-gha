const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/UnauthorizedError');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    next(new UnauthorizedError());
    return;
  }
  let payload;
  try {
    payload = jwt.verify(token, 'TODO: SECRET');
  } catch (err) {
    throw new UnauthorizedError();
  }
  req.user = payload;
  next();
};

module.exports = auth;
