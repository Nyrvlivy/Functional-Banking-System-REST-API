const { accounts } = require("../data/database");

const getAccountBalance = (req, res, next) => {
  let { accountNumber} = req.params;

  if(!accountNumber) {
    accountNumber = req.query.accountNumber;
  }

  const account = accounts.find((account) => account.number === accountNumber);

  res.status(200).json({ Balance: account.balance });

  next();
};

module.exports = { getAccountBalance };
