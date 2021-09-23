const { Router } = require('express');
const router = Router();

const Controller = require('./../controllers/product');

router.get('/api/products', Controller.list)

module.exports = router;