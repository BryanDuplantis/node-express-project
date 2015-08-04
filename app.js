var express = require('express');

var routes = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

app.set('view engine', 'ejs');

app.locals.title = "Bryan Duplantis";

app.use(express.static('public'));

app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);

//error logging
app.use(function (req, res) {
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
