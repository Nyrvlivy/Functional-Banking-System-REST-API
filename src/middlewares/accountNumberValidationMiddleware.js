const { accounts } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const validateAccountNumber = (req, res, next) => {
  const { numberAccount } = req.params;

  
  if (isNaN(numberAccount) || numberAccount.length !== 6) {
    return res.status(400).json({ message: httpStatusCode[400] });
  }
  
  const accountExists = accounts.find(
    account => account.number == numberAccount
  );
    
  if (!accountExists) {
    return res.status(404).json({ message: httpStatusCode[404] });
  }

  next();
};

module.exports = { validateAccountNumber };