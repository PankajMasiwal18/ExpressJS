const sgMail = require('@sendgrid/mail');
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'pankajmasiwal18@gmail.com', //where we want to send email   
    from: 'pankaj.masiwal@mail.vinove.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg)
.then(() => {
    console.log("mail send.")
}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });