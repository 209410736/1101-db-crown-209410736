var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  title: 'Express',
  name: 'Xiwei SUN',
  id: '209410736',});
});

module.exports = router;
