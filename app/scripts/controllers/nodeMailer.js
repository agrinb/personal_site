var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        api_user: 'SENDGRID_USERNAME',
        api_key: 'SENDGRID_PASSWORD'
    }
}

var email = {
    to: ['alek.grinberg@gmail.com'],
    from: req.message.email,
    subject: 'New connection',
    text: message.mbody,
    html: message.mbody
};

// nodemailer.sendEmail = function (req) { 
//     email = {
//     to: ['alek.grinberg@gmail.com'],
//     from: req.message.email,
//     subject: 'New connection',
//     text: req.message.mbody,
//     html: req.message.mbody
//   };
//     mailer.sendmail(email);
// };

mailer.sendMail(email, function(err, res) {
    if (err) { 
        console.log(err) 
    }
    console.log(res);
});


var mailer = nodemailer.createTransport(sgTransport(options));

