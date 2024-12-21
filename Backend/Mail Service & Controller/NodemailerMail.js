const nodemailer= require('nodemailer');
const { text } = require('stream/consumers');
require('dotenv').config();

const envMail='muditworks99@gmail.com';
const envPass='gajc nkzl ocbi cqxq';

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: envMail,
        pass:envPass,
    },
    
})

exports.sendToSelf=async (nm,email, sub, msg)=>{
    const mailOptions={
        from:envMail,
        to: envMail,
        subject:"Someone Contacted via Online Portfolio",
        text: `You received a new message:\n\nName: ${nm}\nEmail: ${email}\nSubject:${sub}\nMessage: ${msg}`,
    };
    console.log('Self:',mailOptions);
    
    await transporter.sendMail(mailOptions);
}

exports.sendAutoResponse = async (name, email) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Thank you for contacting us!',
        text: `Hello ${name},\n\nThank you for getting in touch. I have received your message and will get back to you shortly.\n\nBest Regards,\nMudit Mehta`,
    };

    console.log('Auto:',mailOptions);

    await transporter.sendMail(mailOptions);
};