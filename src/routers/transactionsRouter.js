const express = require("express");
const router = express.Router();

const { validateAccountNumber } = require("../middlewares/accountNumberValidationMiddleware");
const { validateAccountPassword } = require("../middlewares/accountPasswordValidationMiddleware");
const { isPositiveAmount } = require("../middlewares/amountVerificationMiddleware");

const { createNewDeposit } = require("../controllers/depositController");

// POST deposit
router.post("/transactions/deposit", validateAccountNumber, isPositiveAmount, createNewDeposit, (req, res) => {});

// POST transfer
router.post("/transactions/transfer", validateAccountNumber, validateAccountPassword, isPositiveAmount, (req, res) => {});

// POST withdraw
router.post("/transactions/withdraw", validateAccountNumber, validateAccountPassword, isPositiveAmount, (req, res) => {});

module.exports = router;
