const express = require('express');
const router = express.Router();

const nodeMailerController = require('../controllers/nodeMailerController');


router.post('/', nodeMailerController.sendMail);

module.exports = router;