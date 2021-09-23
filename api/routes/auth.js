const { Router } = require('express');
const router = Router();

const Controller = require('./../controllers/authController')

router.post('/api/signin', Controller.signin);

router.post('/api/signup', Controller.signup);

router.get('/api/me', Controller.authenticated, Controller.me)

router.get('/api/me/temperatura', Controller.authenticated, Controller.temperatura)

module.exports = router;