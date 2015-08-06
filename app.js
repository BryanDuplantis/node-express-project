var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

require('./lib/secrets');

app.locals.title = "Bryan Duplantis";

var routes = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');

// app.use(express.static('public'));

//======routes======
app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);

//error logging
app.use(function (req, res) {
  //400s before 500s
  res.status(403).send('Unauthorized!');
});

// pass 4 arguments to create an error handling middleware
app.use(function (req, res) {
  console.log('Ooooops!', err.stack);
  res.status(500).send('My Bad');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});

module.exports = app;
