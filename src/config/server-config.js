const dotenv = require('dotenv')

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  ACTIVEMQ_URL: process.env.ACTIVE_MQ_URL,
  ACTIVEMQ_CHANNEL: process.env.ACTIVEMQ_CHANNEL,
}