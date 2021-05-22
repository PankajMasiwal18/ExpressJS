const express = require('express');
const router = express.Router();

const empController = require('../controllers/empController');

router.get('/', empController.lookup)
router.post('/', empController.all_Emp_Detail)

module.exports = router;
