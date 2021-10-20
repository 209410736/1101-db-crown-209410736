var express = require('express');
var router = express.Router();
const crown2Controller_36 = require('../controllers/crown2Controller_36');
/* GET home page. */
router.get('/', crown2Controller_36.getCategories);

module.exports = router;


