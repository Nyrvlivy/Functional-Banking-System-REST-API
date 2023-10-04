const { accounts } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateAccountNumber = (req, res, next) => {
  let { accountNumber } = req.body;

  if (!accountNumber) {
    if(req.params.accountNumber) {
      accountNumber = req.params.accountNumber;
    } else {
      accountNumber = req.query.accountNumber;
    }
  }
  
  if (isNaN(accountNumber) || accountNumber.length !== 6) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }
  
  const accountExists = accounts.find(
    account => account.number == accountNumber
  );
    
  if (!accountExists) {
    return res.status(404).json({ message: httpStatusCode[404] });
  }

  next();
};

module.exports = { validateAccountNumber };