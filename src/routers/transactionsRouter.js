const express = require("express");
const router = express.Router();

const { validateAccountNumber } = require("../middlewares/accountNumberValidationMiddleware");
const { validateTransferAccounts } = require("../middlewares/validateTransferAccountsMiddleware");
const { validateAccountPassword } = require("../middlewares/accountPasswordValidationMiddleware");
const { isPositiveAmount } = require("../middlewares/amountVerificationMiddleware");

const { createNewDeposit } = require("../controllers/depositController");
const { createNewWithdraw } = require("../controllers/withdrawController");
const { createNewTransfer } = require("../controllers/transferController");

router.post("/transactions/deposit", validateAccountNumber, isPositiveAmount, createNewDeposit, (req, res) => {});

router.post("/transactions/withdraw", validateAccountNumber, validateAccountPassword, isPositiveAmount, createNewWithdraw, (req, res) => {});

router.post("/transactions/transfer", validateTransferAccounts, isPositiveAmount, createNewTransfer, (req, res) => {});

module.exports = router;
