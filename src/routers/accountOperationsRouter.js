const express = require("express");
const router = express.Router();

const { createNewAccount, updateAccount, deleteAccount } = require("../controllers/accountOperationsController");

// CREATE account
router.post("/accounts/", createNewAccount, (req, res) => {});

// UPDATE account
router.put("/accounts/:numberAccount/user", updateAccount, (req, res) => {});

// DELETE account
router.delete("/accounts/:numberAccount", deleteAccount, (req, res) => {
  // Only for balance 0.
});

module.exports = router;
