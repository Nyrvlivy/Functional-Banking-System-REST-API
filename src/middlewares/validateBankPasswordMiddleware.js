const database = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateBankPassword = (req, res, next) => {
  const { bank_password } = req.query;

  if (!bank_password) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }

  if (bank_password !== database.bank.password) {
    return res.status(401).json({ message: httpStatusCode[401] });
  }

  next();
};

module.exports = {
  validateBankPassword,
};
