const { accounts, deposits, withdraws, transfers } = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");

const getAccountStatement = (req, res, next) => {
  let { accountNumber} = req.params;

  if(!accountNumber) {
    accountNumber = req.query.accountNumber;
  }

  const account = accounts.find((account) => account.number === accountNumber);

  const depositsStatement = deposits.filter(deposit => deposit.accountNumber === accountNumber);
  const withdrawsStatement = withdraws.filter(withdraw => withdraw.accountNumber === accountNumber);
  const sentTransfersStatement = transfers.filter(transfer => transfer.sourceAccountNumber === accountNumber);
  const receivedTransfersStatement = transfers.filter(transfer => transfer.destinationAccountNumber === accountNumber);

  const statement = {
    deposits: depositsStatement,
    withdraws: withdrawsStatement,
    sentTransfers: sentTransfersStatement,
    receivedTransfers: receivedTransfersStatement,
  };

  res.status(200).json({ Statement: statement });
  next();
};

module.exports = { getAccountStatement };