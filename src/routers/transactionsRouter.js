const express = require("express");
const router = express.Router();

const { validateAccountNumber } = require("../middlewares/validateAccountNumberMiddleware");
const { validateTransferAccounts } = require("../middlewares/validateTransferAccountsMiddleware");
const { validateAccountPassword } = require("../middlewares/validateAccountPasswordMiddleware");
const { isPositiveAmount } = require("../middlewares/validateAmountMiddleware");

const { createNewDeposit } = require("../controllers/depositController");
const { createNewWithdraw } = require("../controllers/withdrawController");
const { createNewTransfer } = require("../controllers/transferController");

router.post("/transactions/deposit", validateAccountNumber, isPositiveAmount, createNewDeposit, (req, res) => {});

router.post("/transactions/withdraw", validateAccountNumber, validateAccountPassword, isPositiveAmount, createNewWithdraw, (req, res) => {});

router.post("/transactions/transfer", validateTransferAccounts, isPositiveAmount, createNewTransfer, (req, res) => {});

module.exports = router;
