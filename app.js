const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cardRouter = require('./routes/card');
const userRouter = require('./routes/users');
const { NotFoundError } = require('./utils/NotFoundError');
const { errorMiddleware } = require('./utils/errorMiddleware')
const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use(cookieParser());
app.use(cardRouter);
app.use(userRouter);
app.use('*', (req, res, next) => {
  next(new NotFoundError());
});
app.use(errors());
app.use(errorMiddleware);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening port ${PORT}`);
});
