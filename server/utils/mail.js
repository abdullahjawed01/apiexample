import nodemailer  from "nodemailer"



async function mail(from, pwd, to, subject, text) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: from,   
                pass: pwd     
            }
        });

        const info = await transporter.sendMail({
            from,
            to,
            subject,
            text,
        });

        console.log("Email sent:", info.messageId);

    } catch (error) {
        console.log(error);
    }
}

export default mail;


