const amqplib = require('amqplib');
const ServerConfig = require('./server-config');
const { EmailService } = require('../services');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const Logger = require('./logger-config')

async function connectQueue() {
  try {
    const connection = await amqplib.connect(ServerConfig.ACTIVEMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(ServerConfig.ACTIVEMQ_CHANNEL);

    channel.consume(ServerConfig.ACTIVEMQ_CHANNEL, async (data) => {
      const message = JSON.parse(`${Buffer.from(data.content)}`);
      await EmailService.sendEmail(
        ServerConfig.GMAIL_EMAIL,
        message.recipientEmail,
        message.subject,
        message.text
      );
      channel.ack(data);

    });
    Logger.info(`Connected to RabbitMQ and consuming messages from ${ServerConfig.ACTIVEMQ_CHANNEL}`, {});
  } catch (error) {
    throw new AppError("Failed to connect to RabbitMQ", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  connectQueue,
};
