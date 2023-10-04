const express = require("express");
const router = express.Router();
const { validateAccountNumber } = require("../middlewares/validateAccountNumberMiddleware");

const { createNewAccount, updateAccount, deleteAccount } = require("../controllers/accountOperationsController");

router.post("/accounts/", createNewAccount);

router.put("/accounts/:accountNumber/user", validateAccountNumber, updateAccount);

router.delete("/accounts/:accountNumber", validateAccountNumber, deleteAccount);

module.exports = router;