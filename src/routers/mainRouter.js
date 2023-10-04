const express = require("express");
const router = express.Router();
const accountOperationsRouter = require("./accountOperationsRouter");
const bankAccountsRouter = require("./bankAccountsRouter");
const queriesRouter = require("./queriesRouter");
const transactionsRouter = require("./transactionsRouter");

router.use("/", accountOperationsRouter);
router.use("/", bankAccountsRouter);
router.use("/", queriesRouter);
router.use("/", transactionsRouter);

module.exports = router;
