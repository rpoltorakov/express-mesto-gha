const express = require('express');
const mongoose = require('mongoose');
const cardRouter = require('./routes/card');
const userRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '6495ebafbf4776aee90e71f1',
  };
  next();
});

app.use(cardRouter);
app.use(userRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Page not found' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening port ${PORT}`);
});
