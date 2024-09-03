const { StatusCodes } = require('http-status-codes');
const { EmailService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createTicket(req, res) {
  try {
    const response = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recipientEmail: req.body.recipientEmail,
    })
    SuccessResponse.data = response;
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

module.exports = {
  createTicket,
}