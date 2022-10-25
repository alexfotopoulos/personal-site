import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    };

    const data = JSON.parse(req.body);

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.OUTLOOK_USER,
            pass: process.env.OUTLOOK_PASSWORD
        }
    });

    const options = {
        from: process.env.OUTLOOK_USER,
        to: process.env.GMAIL_USER,
        subject: "Personal Site Contact Form Email",
        text: `${data.name} (${data.email}) sent the following message: ${data.message}`
    };

    transporter.sendMail(options, function (err, info) {
        if (err) {
            console.log(err);
            return;
        };
        console.log("Sent: ", info.response);
    });
};