const { accounts } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateAccountPassword = (req, res, next) => {
  const { accountNumber, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is missing!" });
  }

  const account = accounts.find((account) => account.number === accountNumber);

  if (account.password !== password) {
    return res.status(400).json({ message: "Invalid password!" });
  }

  next();
};

module.exports = { validateAccountPassword };
