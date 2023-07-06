const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const {
  validatorCardId,
  validatorCreateCard,
} = require('../middlewares/validators');

router.post('/signin', login);
router.post('/signup', createUser);
router.use(auth);
router.get('/cards', getCards);
router.post('/cards', validatorCreateCard, createCard);
router.delete('/cards/:cardId', validatorCardId, deleteCard);
router.put('/cards/:cardId/likes', validatorCardId, likeCard);
router.delete('/cards/:cardId/likes', validatorCardId, dislikeCard);

module.exports = router;
