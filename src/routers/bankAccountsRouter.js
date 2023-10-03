const express = require("express");
const router = express.Router();
const { validateBankPassword } = require("../middlewares/validateBankPasswordMiddleware");
const { listAccounts } = require("../controllers/bankAccountsController");

router.get("/accounts", validateBankPassword, listAccounts, (req, res) => {});

module.exports = router;
