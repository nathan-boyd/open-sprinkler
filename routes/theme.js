var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('theme', { title: 'Theme' });
});

module.exports = router;
