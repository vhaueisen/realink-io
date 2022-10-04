// @ts-nocheck
import { google } from "googleapis";
import { MailComposer } from "mailcomposer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import dotenv from "dotenv";

dotenv.config();
const opts = {
  points: 2, // 2 points
  duration: 300, // Per 5 minutes
};

const rateLimiter = new RateLimiterMemory(opts);

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

const createMail = (options, callback) => {
  const mailComposer = new MailComposer(options);
  mailComposer.compile().build(callback);
};

export const sendMail = async (options) => {
  try {
    await rateLimiter.consume(options.remoteAddress, 1);
  }
  catch {
    return false;
  }
  const gmail = getGmailService();
  const mailOptions = {
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Vitor Haueisen" },
      { key: "X-Application-Version", value: "v1.0.0" },
    ],
    ...options,
  };
  createMail(mailOptions, (err, message) => {
    if (err) throw err;
    const encodedMessage = encodeMessage(message);
    gmail.users.messages.send({
      userId: "me",
      resource: {
        raw: encodedMessage,
      },
    });
  });
  return true;
};