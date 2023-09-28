const database = require("../data/database");

const validateBankPassword = (req, res, next) => {
  const { bank_password } = req.query;

  if (!bank_password) {
    return res.status(400).json({ message: "Blank password not allowed!" });
  }

  if (bank_password !== database.bank.password) {
    return res.status(401).json({ message: "Invalid password!" });
  }

  next();
};

module.exports = {
  validateBankPassword,
};
