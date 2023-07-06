const router = require('express').Router();
const {
  getUsers,
  getUser,
  updateUser,
  updateAvatar,
  getCurrentUser,
} = require('../controllers/users');
const {
  validatorUsersId,
  validatorUpdateUser,
  validatorUpdateAvatar,
} = require('../middlewares/validators');

router.get('/users', getUsers);
router.get('/users/me', getCurrentUser);
router.get('/users/:userId', validatorUsersId, getUser);
router.patch('/users/me', validatorUpdateUser, updateUser);
router.patch('/users/me/avatar', validatorUpdateAvatar, updateAvatar);

module.exports = router;
