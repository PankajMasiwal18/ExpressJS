const nodemailer = require("nodemailer");
require('dotenv').config()

module.exports.sendMail = async (req, res) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // sender user
            pass: process.env.PASSWORD, // sender password
        },
    });

    try {
        let info = await transporter.sendMail({
            // from: '"Pankaj Masiwal"',                                    //------->>> sender address
            // to: "pankajmasiwal18@gmail.com, pankaj.masiwal@mail.vinove.com", // list of receivers
            to: `${req.body.email}`,
            subject: "Check ker...", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        res.send(info);
    }
    catch (err) {
        res.send(err);
    }
}