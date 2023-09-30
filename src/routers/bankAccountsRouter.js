const express = require("express");
const router = express.Router();
const { validateBankPassword } = require("../middlewares/bankPasswordValidationMiddleware");
const { listAccounts } = require("../controllers/bankAccountsController");

router.get("/accounts", validateBankPassword, listAccounts, (req, res) => {});

module.exports = router;
