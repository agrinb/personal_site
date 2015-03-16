// var gzippo         = require('gzippo');
// var express        = require('express');
var morgan         = require('morgan');
// var bodyParser     = require('body-parser');
// var methodOverride = require('method-override');
// var app            = express();
// var app = express();
 

// log every request to the console
// app.use(bodyParser()); // pull information from html in POST
// app.use(methodOverride());  // simulate DELETE and PUT
// app.listen(process.env.PORT || 5000);

var gzippo = require('gzippo');
var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/getEmail',function(req,res){
  this.req
  // email = {
  //   to: ['alek.grinberg@gmail.com'],
  //   from: req.message.email,
  //   subject: 'New connection',
  //   text: req.message.mbody,
  //   html: req.message.mbody
  // };
  //   mailer.sendmail(email);
});


app.use(morgan('dev')); 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);