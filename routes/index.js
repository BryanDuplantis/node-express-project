var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Welcome To My App!');
});

router.get('/templates/about', function (req, res, next) {
  res.send('This Is About Me!');
  next();
});

router.get('/templates/contact', function (req, res) {
  res.send('This Is My Contact Information');
});

router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
