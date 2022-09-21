const router = require('express').Router();
const Account = require('../db/Account');

router.post('/signup', async (req, res, next) => {
  try {
    const account = await Account.create(req.body);
    if (!account) res.sendStatus(404);
    const token = await user.generateToken()
    res.send(token);
  } catch (error) {
    next(error)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await Account.authenticate(req.body);
    res.send(token);
  } catch (error) {
    next(error);
  }
});

router.get('/authuser', async (req, res, next) => {
  try {
    const authUser = await Account.findByToken(req.headers.authorization);
    res.send(authUser);
  } catch (error) {
    next(error)
  }
})


module.exports = router;