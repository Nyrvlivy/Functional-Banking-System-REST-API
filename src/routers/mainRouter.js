const express = require("express");
const router = express.Router();
const accountOperationsRouter = require("./accountOperationsRouter");
const bankAccountsRouter = require("./bankAccountsRouter");
const queriesRouter = require("./queriesRouter");
const transactionsRouter = require("./transactionsRouter");

const mainRouteMiddleware = require("../middlewares/mainRouteMiddleware");

router.use("/", accountOperationsRouter);
router.use("/", bankAccountsRouter);
router.use("/", queriesRouter);
router.use("/", transactionsRouter);

router.get("/", (req, res) => {
  res.send("This is my main route!");
});

module.exports = router;
