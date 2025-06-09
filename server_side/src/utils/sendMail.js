import nodemailer from 'nodemailer';

const sendMail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to,
            subject,
            text
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent to: ', to);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendMail;