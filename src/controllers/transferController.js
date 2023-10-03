const { accounts, transfers } = require("../data/database");
const { format } = require("date-fns");
const transferModel = require("../models/transferModel");

const createNewTransfer = (req, res, next) => {
  const { sourceAccountNumber, destinationAccountNumber, amount } = req.body;
  
  const sourceAccount = accounts.find((account) => account.number == sourceAccountNumber);
  const destinationAccount = accounts.find((account) => account.number == destinationAccountNumber);

  if (sourceAccount.balance < amount) {
    return res.status(400).json({ mensagem: "Insufficient balance to complete the operation." });
  }

  sourceAccount.balance -= amount;
  destinationAccount.balance += amount;

  transfers.push(
    transferModel(
      format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      sourceAccount,
      destinationAccount,
      amount
    )
  );

  res.status(201).send();
  next();
};

module.exports = { createNewTransfer };
