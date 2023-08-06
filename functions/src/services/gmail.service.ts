import { google } from "googleapis";
import { credentials } from "../utils/gmail";

console.log({ credentials });
const sendEmail = async ({
  from,
  to,
  subject,
  message,
}: {
  from: string;
  to: string;
  subject: string;
  message: string;
}) => {
  // Configure a JWT auth client
  let jwtClient = new google.auth.JWT(
    credentials.client_email,
    credentials,
    credentials.private_key,
    ["https://www.googleapis.com/auth/gmail.send"],
    process.env.SUBJECT_EMAIL_ADDRESS
  );

  //authenticate request
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log({ err });
      return;
    } else {
      console.log("Successfully connected!");
    }
  });

  const gmail = google.gmail({ version: "v1", auth: jwtClient });

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
  } catch (err: any) {
    console.error("Error sending email:", err.message);
  }
};

function createMessage({
  from,
  to,
  subject,
  message,
}: {
  [key: string]: string;
}) {
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

export default {
  sendEmail,
};
