const { accounts, withdraws } = require("../data/database");
const { format } = require('date-fns');
const withdrawModel = require("../models/withdrawModel");

const createNewWithdraw = (req, res, next) => {
  const { accountNumber, amount } = req.body;

  const account = accounts.find((account) => account.number == accountNumber);

  if (account.balance < amount) {
    return res.status(400).json({ mensagem: "Insufficient balance to complete the operation." });
  }

  account.balance -= amount;

  withdraws.push(
    withdrawModel(
      format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      accountNumber,
      amount
    )
  );

  res.status(201).send();
  next();
};

module.exports = { createNewWithdraw };