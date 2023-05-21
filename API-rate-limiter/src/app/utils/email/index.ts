import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = (mailOptions: {
  email: string;
  subject: string;
  message: string;
}) => {
  return new Promise<void>((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port: 465,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD,
      },
      secure: true,
      logger: false,
      debug: true,
    });

    const options = {
      from: `IREMBO <${process.env.SERVICE_USERNAME}>`,
      to: mailOptions.email,
      subject: mailOptions.subject,
      html: mailOptions.message,
    };

    transporter.sendMail(options, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

export default sendEmail;
