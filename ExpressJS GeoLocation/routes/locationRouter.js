const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController');

router.get('/', locationController.getLocation)
router.post('/', locationController.saveLocation)

module.exports = router;
