var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

router.get('/', function (req, res) {
  res.render('templates/contact');
    transporter.sendMail({from: 'duplantis@gmail.com', to: 'duplantis@gmail.com', subject: 'Thanks for contacting me!', text: 'It is great to hear from you.'});
    console.log('test email sent');
});

// router.get('/contact', function (req, res) {
//   console.log(req.body.name);
//   console.log(req.body.mail);
//   console.log(req.body.msg);
//   transporter.sendMail({
//     from: 'duplantis@gmail',
//     to: 'receiver@address',
//     subject: 'hello',
//     text: 'hello world!'
//   // res.send('Thanks for submitting!');
//   });
// });

module.exports = router;
