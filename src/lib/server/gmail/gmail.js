// @ts-nocheck
import { google } from "googleapis";
import MailComposer from "nodemailer/lib/mail-composer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import dotenv from "dotenv";
dotenv.config();

const getGmailService = () => {
  const client_secret = process.env.GMAIL_CLIENT_SECRET;
  const client_id = process.env.GMAIL_CLIENT_ID;
  const redirect_uri = process.env.ORIGIN;

  const tokens = {
    access_token: process.env.GMAIL_ACCESS_TOKEN,
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    scope: process.env.GMAIL_SCOPE,
    token_type: process.env.GMAIL_TOKEN_TYPE,
    expiry_date: parseInt(process.env.GMAIL_TOKEN_EXPIRES ?? ""),
  };

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uri
  );
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const emailApi = async (options) => {
  const gmail = getGmailService();
  const mailOptions = {
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Vitor Haueisen" },
      { key: "X-Application-Version", value: "v1.0.0" },
    ],
    ...options,
  };
  const rawMessage = await createMail(mailOptions);
  const { data: { id } = {} } = await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: rawMessage,
    },
  });
  return id;
};

const opts = {
  points: 2, // 2 points
  duration: 300, // Per 5 minutes
};

const rateLimiter = new RateLimiterMemory(opts);

export const sendMail = async ({
  to,
  cc,
  subject,
  text,
  html,
  attachments,
  replyTo,
  remoteAddress,
}) => {
  try {
    await rateLimiter.consume(remoteAddress, 1);
    const messageId = await emailApi({
      to,
      cc,
      subject,
      text,
      html,
      attachments,
      replyTo,
    });
    return messageId;
  } catch {
    return null;
  }
};
