const { accounts, deposits } = require("../data/database");
const depositModel = require("../models/depositModel");
const {format} = require('date-fns');

const createNewDeposit = (req, res, next) => {
  const { accountNumber, amount } = req.body;

  const account = accounts.find((account) => account.number == accountNumber);

  account.balance += amount;

  deposits.push(
    depositModel(
      format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      accountNumber,
      amount
    )
  );

  res.status(201).send();
  next();
};
module.exports = { createNewDeposit };
