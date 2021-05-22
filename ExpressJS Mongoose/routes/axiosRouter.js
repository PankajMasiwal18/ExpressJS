const express = require('express');
const router = express.Router();

const axiosController = require('../controllers/axiosContoller');


router.get('/', axiosController.axios_get);
router.post('/', axiosController.axios_post);
router.put('/:id', axiosController.axios_put);
router.delete('/', axiosController.axios_delete);
router.get('/multiple', axiosController.axios_multiple_get);

module.exports = router;
