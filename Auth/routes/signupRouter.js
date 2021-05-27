const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupContoller');


router.post('/', signupController.create_account);
router.put('/:id', signupController.update_account);
router.delete('/:id', signupController.delete_account);

module.exports = router;
