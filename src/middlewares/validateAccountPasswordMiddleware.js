const { accounts } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateAccountPassword = (req, res, next) => {
    let { accountNumber, password } = req.body;

  if (!accountNumber) {
    if(req.params.accountNumber) {
      accountNumber = req.params.accountNumber;
    } else {
      accountNumber = req.query.accountNumber
    }
  }

  if (!password) {
    if(req.params.password) {
      password = req.params.password;
    } else {
      password = req.query.password;
    }
  }

  if (!password) {
    return res.status(400).json({ message: "Password is missing!" });
  }

  const account = accounts.find((account) => account.number === accountNumber);

  if (account.user.password !== password) {
    return res.status(400).json({ message: "Invalid password!" });
  }

  next();
};

module.exports = { validateAccountPassword };
