const express = require("express");
const router = express.Router();

const database = require("../data/database");

// POST deposit
router.post("/transacoes/deposit", (req, res) => {});

// POST transfer
router.post("/transacoes/transfer", (req, res) => {});

// POST withdraw
router.post("/transacoes/withdraw", (req, res) => {});

module.exports = router;
