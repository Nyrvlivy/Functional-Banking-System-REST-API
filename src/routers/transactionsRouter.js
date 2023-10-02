const express = require("express");
const router = express.Router();

const database = require("../data/database");
const validateAccountPassword = require("../middlewares/accountPasswordValidationMiddleware");

// POST deposit
router.post("/transactions/deposit", validateAccountNumber, isPositiveAmount, (req, res) => {});

// POST transfer
router.post("/transactions/transfer", validateAccountNumber, validateAccountPassword, isPositiveAmount, (req, res) => {});

// POST withdraw
router.post("/transactions/withdraw", validateAccountNumber, validateAccountPassword, isPositiveAmount, (req, res) => {});

module.exports = router;
