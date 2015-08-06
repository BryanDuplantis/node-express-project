var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'duplantis@gmail.com',
      pass: 'vm87LAd3eElF'
    },
});

router.get('/', function (req, res) {
  res.render('templates/contact');
})

router.post('/send', function (req, res) {
  console.log(req.body);
    transporter.sendMail({
      from: req.body.name,
      to: 'duplantis@gmail.com',
      subject: req.body.subject,
      text: req.body.comment
    }, function (err, info) {
      if(err){
        console.log(err);
      }else{
        console.log(info);
      }
    });
    res.redirect('/')
})

module.exports = router;
