const { TicketRepository } = require('../repositories');
const { EmailConfig } = require('../config');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const response = await EmailConfig.sendEmail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    if (error.response && error.response.status) {
      throw new AppError('Failed to send email', error.response.status);
    } else {
      throw new AppError('An unexpected error occurred while sending email', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

async function createTicket(data) {
  try {
    const ticket = await ticketRepository.create(data);
    return ticket;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new AppError('Invalid ticket data', StatusCodes.BAD_REQUEST);
    } else {
      throw new AppError('Failed to create ticket', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

async function getPendingEmails() {
  try {
    const pendingTickets = await ticketRepository.getPendingTickets();
    return pendingTickets;
  } catch (error) {
    throw new AppError('Failed to retrieve pending emails', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  sendEmail,
  createTicket,
  getPendingEmails,
};
