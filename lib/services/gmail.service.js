"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const gmail_1 = require("../utils/gmail");
const sendEmail = async ({ from, to, subject, message, }) => {
    // Configure a JWT auth client
    let jwtClient = new googleapis_1.google.auth.JWT(gmail_1.credentials.client_email, gmail_1.credentials, gmail_1.credentials.private_key, ["https://www.googleapis.com/auth/gmail.send"], process.env.SUBJECT_EMAIL_ADDRESS);
    //authenticate request
    jwtClient.authorize(function (err, tokens) {
        if (err) {
            console.log({ err });
            return;
        }
        else {
            console.log("Successfully connected!");
        }
    });
    const gmail = googleapis_1.google.gmail({ version: "v1", auth: jwtClient });
    const rawMessage = createMessage({ from, to, subject, message });
    const encodedMessage = Buffer.from(rawMessage)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    try {
        await gmail.users.messages.send({
            userId: "me",
            requestBody: {
                raw: encodedMessage,
            },
        });
        console.log("Email sent successfully!");
    }
    catch (err) {
        console.error("Error sending email:", err.message);
    }
};
function createMessage({ from, to, subject, message, }) {
    const email = [
        `From: ${from}`,
        `To: ${to}`,
        "Content-Type: text/html; charset=utf-8",
        `Subject: ${subject}`,
        "",
        message,
    ].join("\r\n");
    return email;
}
exports.default = {
    sendEmail,
};
//# sourceMappingURL=gmail.service.js.map