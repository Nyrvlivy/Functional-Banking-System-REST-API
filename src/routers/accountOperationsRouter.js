const express = require("express");
const router = express.Router();
const { validateAccountNumber } = require("../middlewares/accountNumberValidationMiddleware");

const { createNewAccount, updateAccount, deleteAccount } = require("../controllers/accountOperationsController");

router.post("/accounts/", createNewAccount, (req, res) => {});

router.put("/accounts/:numberAccount/user", validateAccountNumber, updateAccount, (req, res) => {});

router.delete("/accounts/:numberAccount", validateAccountNumber, deleteAccount, (req, res) => {});

module.exports = router;