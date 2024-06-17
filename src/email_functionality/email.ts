 import "dotenv/config"
 import nodemailer from 'nodemailer';

 
    //TRANSPORTER CONFIGURATION
  const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });

   const mailFunction = async (to: string, subject: string, html: string) => {

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to,
      subject,
      html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
      } catch (error) {
        console.error('Error sending email: ' + error);
      }
    }
 

    export default mailFunction;