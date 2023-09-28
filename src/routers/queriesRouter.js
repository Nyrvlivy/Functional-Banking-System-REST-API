const express = require("express");
const router = express.Router();

const database = require("../data/database");

// GET balance
router.get("/accounts/balance", (req, res) => {});

// GET statement
router.get("/accounts/statement", (req, res) => {
  // include: deposits, transfers and withdraws
});

module.exports = router;
