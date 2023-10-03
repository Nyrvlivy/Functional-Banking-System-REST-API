const express = require("express");
const router = express.Router();

const { validateAccountNumber } = require("../middlewares/accountNumberValidationMiddleware");
const { validateAccountPassword } = require("../middlewares/accountPasswordValidationMiddleware");

const { getAccountBalance } = require("../controllers/balanceController");


router.get("/accounts/balance", validateAccountNumber, validateAccountPassword, getAccountBalance, (req, res) => {});

router.get("/accounts/statement", validateAccountNumber, validateAccountPassword, (req, res) => {});

module.exports = router;
