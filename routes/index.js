var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/events', function(req, res, next) {
  res.render('gallery');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.post('/submit' , function(req,res){
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  fs.appendFile('data.txt',`name: ${name},email: ${email}, number: ${number}\n`,function(e){
    if(e){
      console.log(e)
    }
  })
})

var transporter =nodemailer.createTransport({
  service: 'gmail',
  auth : {
    user : "suiiiiiii@gmail.com",
    pass : "dontlookforpassword"
  }
});

var mailOptions= {
  from : 'ayantharwan@gmail.com',
  to : req.body.email,
  subject : 'Tickets succesfully booked',
  text : 'your tickets have been booked'

}

transporter.sendMail(mailOptions,function(error,info){ 
  if(error){
    console.log(error)
  }
  else{
    res.render("success")
  }
});

module.exports = router;
