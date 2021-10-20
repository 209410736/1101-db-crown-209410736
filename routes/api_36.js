var express = require('express');
var router = express.Router();
const apiCrown2Controller_36 = require('../controllers/apiCrown2Controller_36');
/* GET home page. */
router.get('/category_36', apiCrown2Controller_36.getCategories);

module.exports = router;
