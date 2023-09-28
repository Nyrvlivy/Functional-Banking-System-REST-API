const express = require("express");
const router = express.Router();

const database = require("../data/database");

// CREATE account
router.post("/accounts/", (req, res) => {});

// UPDATE account
router.put("/accounts/:numberAccount/user", (req, res) => {});

// DELETE account
router.delete("/accounts/:numberAccount", (req, res) => {
  // Only for balance 0.
});

module.exports = router;
