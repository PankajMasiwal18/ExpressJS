# SendGrid

### install
npm i @sendgrid/mail


const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com',
  from: 'test@example.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
      console.log("mail send");
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });