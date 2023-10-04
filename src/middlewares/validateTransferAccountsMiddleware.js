const { accounts } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateTransferAccounts = (req, res, next) => {
  let { sourceAccountNumber, destinationAccountNumber, password } = req.body;

  if (!sourceAccountNumber || !destinationAccountNumber) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }

  if (isNaN(sourceAccountNumber) || sourceAccountNumber.length !== 6) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }

  if (isNaN(destinationAccountNumber) || destinationAccountNumber.length !== 6) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }

  const sourceAccountExists = accounts.find(
    (account) => account.number == sourceAccountNumber
  );

  const destinationAccountExists = accounts.find(
    (account) => account.number == destinationAccountNumber
  );

  if (!sourceAccountExists || !destinationAccountExists) {
    return res.status(404).json({ message: httpStatusCode[404] });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is missing!" });
  }

  if (sourceAccountExists.user.password !== password) {
    return res.status(400).json({ message: "Invalid password!" });
  }

  next();
};

module.exports = { validateTransferAccounts };
