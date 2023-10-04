const express = require("express");
const router = express.Router();

const { validateAccountNumber } = require("../middlewares/validateAccountNumberMiddleware");
const { validateAccountPassword } = require("../middlewares/validateAccountPasswordMiddleware");

const { getAccountBalance } = require("../controllers/balanceController");
const { getAccountStatement } = require("../controllers/statementController");


router.get("/accounts/balance", validateAccountNumber, validateAccountPassword, getAccountBalance);

router.get("/accounts/statement", validateAccountNumber, validateAccountPassword, getAccountStatement);

module.exports = router;
