const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => res.status(500).send({ message: 'Interal server error' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Validation error' });
      } else {
        res.status(500).send({ message: 'Interal server error' });
      }
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail(() => new Error('Not found'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Not found') {
        res.status(404).send({ message: 'User not found' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'Bad request' });
      } else {
        res.status(500).send({ message: 'Interal server error' });
      }
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail(() => new Error('Not found'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Not found') {
        res.status(404).send({ message: 'User not found' });
      } else if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: 'Bad request' });
      } else {
        res.status(500).send({ message: 'Interal server error' });
      }
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(() => new Error('Not found'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Not found') {
        res.status(404).send({ message: 'User not found' });
      } else if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: 'Bad request' });
      } else {
        res.status(500).send({ message: 'Interal server error' });
      }
    });
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  updateAvatar,
};
