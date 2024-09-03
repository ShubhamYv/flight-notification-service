const { StatusCode } = require('http-status-codes')

const info = (req, res) => {
  return res.status(StatusCode.OK).json({
    success: true,
    message: "API is live",
    error: {},
    data: {}
  });
}


module.exports = {
  info
}