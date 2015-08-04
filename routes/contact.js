var express = require('express');
var router = express.Router();

router.get('/contact', function (req, res) {
  var obj = req.params;

  res.render('templates/contact', obj);
});

module.exports = router;
