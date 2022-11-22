import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nodemailer = require('nodemailer');
  const mailGun = require('nodemailer-mailgun-transport');
  require('dotenv').config();

  const auth = {
    auth: {
      api_key: process.env.API_KEY || 'MAIL_GUN_API_KEY',
      domain: process.env.DOMAIN || 'MAIL_GUN_DOMAIN',
    },
  };

  const transporter = nodemailer.createTransport(mailGun(auth));

  const sendMail = (email: any, subject: any, text: any, cb: any) => {
    const mailOptions = {
      from: email,
      to: 'chrispydev.owusu@gmail.com',
      subject,
      text,
    };

    transporter.sendMail(mailOptions, function (err: any, data: any) {
      if (err) {
        return cb(err, null);
      }
      return cb(null, data);
    });
  };
  if (req.method === 'POST') {
    // let message;
    try {
      const { subject, email, text } = req.body;
      sendMail(email, subject, text, function (err: any): any {
        if (err) {
          // message = res.status;
          return res
            .status(500)
            .json({ message: err.message || 'Internal Error' });
        }
        // message = 'Email sent!!!!!';
        return res.json({ message: 'Email sent!!!!!' });
      });

      // return res.status(200).json({ message: 'Email sent!!!!!' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message || 'Internal Error' });
    }
  } else {
    res.status(200).json({ name: 'John Doe' });
  }
}
