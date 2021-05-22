const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.get('/', userController.all_User_Detail)
router.get('/:id', userController.user_Id_Detail)
router.post('/', userController.add_User_Detail)
router.put('/:id', userController.update_User_Detail)
router.delete('/:id', userController.delete_User_Detail)
// aggregate (Lookup)
router.get('/lookup', userController.lookup)


module.exports = router;
