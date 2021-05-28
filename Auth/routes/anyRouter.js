const express = require('express');
const router = express.Router();

const anyController = require('../controllers/anyController');
const verifyToken = require('../config/verifyToken');


router.get('/', verifyToken.verifyJwtToken, anyController.any_get);

module.exports = router;
