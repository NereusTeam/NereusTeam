var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport ({
  service: "hotmail",
  auth: {
        user: 'Khitwaorg@outlook.com',
        pass: process.env.outlookPass
  }
}));

module.exports = function(mailOptions){
  mailOptions.from = 'Khitwa <Khitwaorg@gmail.com>';
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
       console.log(error);
    }else{
    console.log('Message sent: ' + info.response);
    }
  });
};




